import "./app.css";
import { Fragment, useEffect, useState } from "react";
import Unity, { UnityContext } from "react-unity-webgl";

interface Vector2 {
  x: number;
  y: number;
}

// This is the context that Unity will use to communicate with the React app.
// const unityContext = new UnityContext({
//   productName: "React Unity WebGL Tests",
//   companyName: "Jeffrey Lanters",
//   // The url's of the Unity WebGL runtime, these paths are public and should be
//   // accessible from the internet and relative to the index.html.
//   loaderUrl: "unitybuild/2020.1/myunityapp.loader.js",
//   dataUrl: "unitybuild/2020.1/myunityapp.data",
//   frameworkUrl: "unitybuild/2020.1/myunityapp.framework.js",
//   codeUrl: "unitybuild/2020.1/myunityapp.wasm",
//   streamingAssetsUrl: "unitybuild/2020.1/streamingassets",
//   // Additional configuration options.
//   webglContextAttributes: {
//     preserveDrawingBuffer: true,
//   },
// });

const unityContext = new UnityContext({
  productName: "React Unity WebGL Tests",
  companyName: "Jeffrey Lanters",

  loaderUrl: "unity/unityTest.loader.js",
  dataUrl: "unity/unityTest.data",
  frameworkUrl: "unity/unityTest.framework.js",
  codeUrl: "unity/unityTest.wasm",

});

function App() {
  useEffect(function () {
    unityContext.on("GameOver1", function (username,score) {
      console.log("QUITTED = "+username)
      console.log("YEAHHHH",score)
    });
    // unityContext.on("GameOver", function () {
    //   console.log("STARTED = ")
    // });
  }, []);

  return (
    <Fragment>
      <div className="wrapper">
        <Unity className="unity-canvas" unityContext={unityContext} />
        <h6>
          Made with love by{" "}
          <a href="https://github.com/jeffreylanters">Jeffrey Lanters</a>
        </h6>
      </div>
    </Fragment>
  );
}

export default App;
