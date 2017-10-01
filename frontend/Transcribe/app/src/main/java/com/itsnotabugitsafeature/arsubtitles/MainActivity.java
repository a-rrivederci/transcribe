package com.itsnotabugitsafeature.arsubtitles;

import android.hardware.Camera;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.util.Log;
import android.view.WindowManager;
import android.widget.FrameLayout;
import android.widget.TextView;
import com.github.nkzawa.socketio.client.IO;
import com.github.nkzawa.socketio.client.Socket;
import com.github.nkzawa.emitter.Emitter;

import java.net.URISyntaxException;

public class MainActivity extends AppCompatActivity {

    private Camera mCamera = null;
    private CameraView mCameraView = null;

    private String TAG = "Transcribe";
    TextView helloTextView;



    private Socket mSocket;
    {
        try {
            //try to connect to the socket
            mSocket = IO.socket("https://faa580b6.ngrok.io");
        } catch (URISyntaxException e) {}

    }

    //listener for a message emitted from server
    private Emitter.Listener onNewMessage = new Emitter.Listener() {
        @Override
        public void call(final Object... args) {
            runOnUiThread(new Runnable() {
                @Override
                public void run() {
                    helloTextView.setText((String) args[0]);
                }
            });
        }
    };

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        //connect to socket server

        mSocket.on("app_captions", onNewMessage);
        mSocket.connect();

        Log.i(TAG, "Connected to Server.");

        //display junk onto phone maybe?
        setContentView(R.layout.activity_main);

        //Prevents phone from locking on its own
        getWindow().addFlags(WindowManager.LayoutParams.FLAG_KEEP_SCREEN_ON);

        //draw string onto screen
        helloTextView = (TextView) findViewById(R.id.text_view_id);
        helloTextView.setText(R.string.transcribedText);

        //open camera junk
        try {
            mCamera = Camera.open();//you can use open(int) to use different cameras
        } catch (Exception e) {
            Log.d("ERROR", "Failed to get camera: " + e.getMessage());
        }

        if (mCamera != null) {
            mCameraView = new CameraView(this, mCamera);//create a SurfaceView to show camera data
            FrameLayout camera_view = (FrameLayout) findViewById(R.id.camera_view);
            camera_view.addView(mCameraView);//add the SurfaceView to the layout

        }

    }

    //disconnect from server to prevent leaks
    @Override
    public void onDestroy() {
        super.onDestroy();

        mSocket.disconnect();
        mSocket.off("app_captions", onNewMessage);
    }
}
