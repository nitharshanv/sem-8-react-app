import React, { useCallback, useRef, useState } from "react";
import Webcam from "react-webcam";


function Header() {
  return (
    <div className="flex justify-center bg-emerald-500 rounded-lg ">
      <div className="py-8">
        <h1 className="text-4xl font-mono font-semibold">
          AI-POWERED THREAT DETECTIOR FOR SMART SURVEILLANCE CAMERAS
        </h1>
      </div>
    </div>
  );
}

function Camera() {
  const webcamref = useRef(null);
  let [imgsrc, setimgsrc] = useState(null);
  let [cam_on, set_cam] = useState("absolute -z-10 top-1/4 hidden");
  let [photo_hide, set_photo] = useState("absolute -z-10 top-1/4 hidden");

  const capture = useCallback(() => {
    const imagesrc = webcamref.current.getScreenshot();
    setimgsrc(imagesrc);
  }, [webcamref, setimgsrc]);

  return (
    <div className="flex justify-center">
      <div className={cam_on}>
        <Webcam
          audio={false}
          ref={webcamref}
          disablePictureInPicture={true}
          screenshotFormat="image/jpeg"
        //className={camera}
        />
        <br />

        <br />
        <div className="flex justify-center">
          <button
            className="rounded-full  border-4 hover:border-8  border-x-emerald-500 hover:ease-in-out "
            onClick={() => {
              set_cam("absolute -z-20 top-1/4 hidden");
              set_photo("absolute z-20 top-1/4 visible");
              capture();
            }}
          >
            {" "}
            &nbsp; capture &nbsp;{" "}
          </button>
        </div>
          <br />
        <div className="flex justify-center">
          <button
            className="rounded-full  border-4 hover:border-8  border-x-emerald-500 hover:ease-in-out "
            onClick={() => {
              set_cam("absolute z-10 top-1/4 hidden");
              set_photo("absolute -z-10 top-1/4 hidden");
            }}
          >
            &nbsp; exit &nbsp;
          </button>
        </div>

      </div>

      <div className={photo_hide}>
        <div>{imgsrc && <img src={imgsrc} />}</div>

        <br />

        <br />
        <div className="flex justify-center">
          <button
            className="rounded-full  border-4 hover:border-8  border-x-emerald-500 hover:ease-in-out "
            onClick={() => {
              set_cam("absolute z-10 top-1/4 visible");
              set_photo("absolute -z-10 top-1/4 hidden");
            }}
          >
            &nbsp; retake &nbsp;
          </button>
        </div>

        <div className="flex justify-center">
          <button
            className="rounded-full  border-4 hover:border-8  border-x-emerald-500 hover:ease-in-out "
            onClick={() => {
              set_cam("absolute z-10 top-1/4 hidden");
              set_photo("absolute -z-10 top-1/4 hidden");
            }}
          >
            &nbsp; exit &nbsp;
          </button>
        </div>

      </div>

      <br />
      <div>
        <button
          className="rounded-full  border-4 hover:border-8  border-x-emerald-500 hover:ease-in-out"
          onClick={() => {
            console.log("image capturing1");
            set_cam("absolute z-10 top-1/4 visible");
            console.log("image capturing2");
          }}
        >
          &nbsp; camera &nbsp;
        </button>
      </div>
    </div>
  );
}


function Detection() {

  let [showresult,hideresult]=useState(" rounded-lg w-6/12 h-3/6 border-8 bg-slate-300 text-emerald-900 absolute z-20 top-1/4 hidden")
  let percent=90;
  let obj='Gun';


  const [photoName, setPhotoName] = useState(
    "https://media.licdn.com/dms/image/D4D03AQFlGHHCUMm-uw/profile-displayphoto-shrink_200_200/0/1676988212774?e=2147483647&v=beta&t=GyLodlN1-Nv0SSTGmQj7_qB-VTgCTjXWylSXBunkRgc"
  );
  const [photoPreview, setPhotoPreview] = useState(
    "https://media.licdn.com/dms/image/D4D03AQFlGHHCUMm-uw/profile-displayphoto-shrink_200_200/0/1676988212774?e=2147483647&v=beta&t=GyLodlN1-Nv0SSTGmQj7_qB-VTgCTjXWylSXBunkRgc"
  );

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    setPhotoName(file.name);
    const reader = new FileReader();
    reader.onload = () => {
      setPhotoPreview(reader.result);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="flex justify-center ">
      <div className="w-6/12 ">
        <div className=" rounded-lg border-4 border-emerald-500 X font-mono h-dvh  ">
          <div className="flex justify-center text-3xl">
            <strong>CNN</strong>
          </div>
          <br />

          <div className="flex justify-center text-2xl font-semibold">
            running on cloud server
          </div>
          <br />
          <div className="flex justify-center text-2xl font-semibold">
            select on option
          </div>
          <br />

          <div className="mt-2">
            <span
              className="block w-40 h-40 rounded-full m-auto shadow"
              style={{
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center center",
                backgroundImage: `url(${photoPreview})`,
              }}
            />
          </div>
          <br />
          <div id="image uploader " className="flex justify-center">
            <input
              name="image1"
              type="file"
              accept="image/*"
              onChange={handlePhotoChange}
              id="select-image-1"
              hidden
            />

            <button
              onClick={() => {
                document.getElementById("select-image-1").click();
              }}
              className="rounded-full  border-4 hover:border-8  border-x-emerald-500 hover:ease-in-out"
            >
              &nbsp; select photo &nbsp;
            </button>
          </div>
          <br />

          <br />
          <Camera />
          <br />
          <div className="flex justify-center">
            <div>
              <button className="rounded-full  border-4 hover:border-8  border-x-emerald-500 hover:ease-in-out"  onClick={()=>{hideresult(" rounded-lg w-6/12 h-3/6 border-8 bg-slate-300 text-emerald-900 absolute z-20 top-1/4 visible")}}>
                &nbsp; Send &nbsp;
              </button>
            </div>
            <div className={showresult}>
    <div className="flex justify-end block ">
    <div className="uppercase p-1 animate-bounce cursor-pointer" onClick={() => {hideresult("rounded-lg w-6/12 h-3/6 border-8 bg-slate-300 text-emerald-900 absolute z-20 top-1/4 hidden")}}>x</div>
    </div>
    <br />
    <div className="p-3 font-serif text-5xl font-extrabold tracking-widest">
    <div className="uppercase">object&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: {obj}</div>
    <div className="uppercase">percentage&nbsp;&nbsp; : {percent} %</div>
    </div>
  </div>
          </div>
        </div>
        <br />
      </div>
    </div>
  );
}
function Footer() { }

function App() {
  return (
    <div>
      <Header />
      <br />
      <Detection />
    </div>
  );
}

export default App;
