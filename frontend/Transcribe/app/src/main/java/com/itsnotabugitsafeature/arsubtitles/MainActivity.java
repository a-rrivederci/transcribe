package com.itsnotabugitsafeature.arsubtitles;

import android.hardware.Camera;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.util.Log;
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

    private Socket mSocket;
    {
        try {
            mSocket = IO.socket("https://faa580b6.ngrok.io");
        } catch (URISyntaxException e) {}
    }

    private Emitter.Listener onNewMessage = new Emitter.Listener() {
        @Override
        public void call(final Object... args) {
            MainActivity.this.runOnUiThread(new Runnable() {
                @Override
                public void run() {
                    // args[0] will be the string
                    Log.d(TAG, (String) args[0]);
                }
            });
        }
    };

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        mSocket.on("new message", onNewMessage);
        mSocket.connect();

        setContentView(R.layout.activity_main);

        //STRING
        final TextView helloTextView = (TextView) findViewById(R.id.text_view_id);
        helloTextView.setText(R.string.transcribedText);

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

    @Override
    public void onDestroy() {
        super.onDestroy();

        mSocket.disconnect();
        mSocket.off("new message", onNewMessage);
    }
}
