// LiveCamera.jsx
import React, { useEffect, useRef } from "react";
import * as posenet from "@tensorflow-models/posenet";
import "@tensorflow/tfjs-backend-webgl";
import { useParams } from "react-router-dom";
import { getSideKeypoints, oneSideData } from "./exerciseProcessor";

const LiveCamera = ({ exercise }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    let apiInterval;

    async function setupCamera() {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          await videoRef.current.play();
        }
      } catch (err) {
        console.error("Error accessing webcam:", err);
      }
    }

    async function loadAndDetectPose() {
      await setupCamera();
      const config = {
        architecture: "MobileNetV1",
        outputStride: 16,
        inputResolution: { width: 640, height: 480 },
      };
      const net = await posenet.load(config);

      // TODO: set up an interval for periodic API calls (if needed)
      apiInterval = window.setInterval(() => {
        console.log("API call placeholder");
      }, 30000);

      async function detectPose() {
        if (videoRef.current) {
          const pose = await net.estimateSinglePose(videoRef.current, { flipHorizontal: false });
          
          // Use multi-side processing for these exercises
          const multiSideExercises = ["Squat", "BicepCurl", "Lunges", "Deadlift", "Bench Press"];
          if (multiSideExercises.includes(exercise)) {
            const OneSideData = getSideKeypoints(pose, "left");
            console.log(`One Side Exercise : ${exercise}`, { OneSideData });
          } else {
            // Use oneSideData processing for other exercises
            let data = [];
            const TwoSidedData = oneSideData(pose, leftSelected, data);
            console.log(`TWO SIDED Exercise: ${exercise}`, TwoSidedData);
          }
        }
        // Call detectPose again after a short delay
        await new Promise(resolve => setTimeout(resolve, 500));
        detectPose();
      }
      detectPose();
    }

    loadAndDetectPose();

    return () => {
      clearInterval(apiInterval);
    };
  }, [exercise]);

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Live Camera for {exercise}</h2>
      <video ref={videoRef} style={{ width: "100%", maxWidth: "640px" }} />
    </div>
  );
};

export default LiveCamera;
