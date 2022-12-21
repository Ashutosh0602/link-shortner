import { useState } from "react";
import "./App.css";

function App() {
  const [value, setvalue] = useState(null);

  const submit = () => {
    console.log(value);
    fetch("http://localhost:3002/", {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify({
        title: "foo",
        body: "bar",
      }),
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  };

  return (
    <div className="App">
      <div className="input_area">
        {/* <form method="POST" action="/">
          <input
            onChange={(e) => setvalue(e.target.value)}
            placeholder="Enter long URL"
            name="input"
          />
          <button onSubmit={submit}>Short URL</button>
        </form> */}
        <input
          onChange={(e) => setvalue(e.target.value)}
          placeholder="Enter long URL"
          name="input"
        />
        <button onClick={submit}>Short URL</button>
      </div>
      <div>
        <div className="waves">
          <svg
            className=".path_0"
            width="100%"
            height="100%"
            id="svg"
            viewBox="0 0 1440 400"
            xmlns="http://www.w3.org/2000/svg"
            class="transition duration-300 ease-in-out delay-150"
          >
            <defs>
              <linearGradient id="gradient" x1="0%" y1="50%" x2="100%" y2="50%">
                <stop offset="5%" stop-color="#002bdc"></stop>
                <stop offset="95%" stop-color="#32ded4"></stop>
              </linearGradient>
            </defs>
            <path
              d="M 0,400 C 0,400 0,266 0,266 C 25.450358788919388,257.2676944380358 50.900717577838776,248.5353888760716 86,245 C 121.09928242216122,241.4646111239284 165.84748847756433,243.12613893374936 200,249 C 234.15251152243567,254.87386106625064 257.70932851190395,264.9600553889308 290,261 C 322.29067148809605,257.0399446110692 363.31519747481974,239.03363951052728 394,246 C 424.68480252518026,252.96636048947272 445.029881588817,284.9053865689601 470,284 C 494.970118411183,283.0946134310399 524.565276169912,249.3448142136321 564,240 C 603.434723830088,230.6551857863679 652.7090137315348,245.71535657651134 683,256 C 713.2909862684652,266.28464342348866 724.5986689039486,271.7937594803226 755,270 C 785.4013310960514,268.2062405196774 834.8963106526706,259.1096055021984 874,257 C 913.1036893473294,254.89039449780162 941.8160884853688,259.76781851088396 972,267 C 1002.1839115146312,274.23218148911604 1033.8393354058542,283.8191204542659 1067,275 C 1100.1606645941458,266.1808795457341 1134.8265698912144,238.95569967205248 1162,227 C 1189.1734301087856,215.04430032794752 1208.8543850292883,218.35808085752439 1236,228 C 1263.1456149707117,237.64191914247561 1297.7558899916319,253.61197689785018 1333,261 C 1368.2441100083681,268.3880231021498 1404.122055004184,267.19401155107494 1440,266 C 1440,266 1440,400 1440,400 Z"
              stroke="none"
              stroke-width="0"
              fill="url(#gradient)"
              fill-opacity="1"
              class="transition-all duration-300 ease-in-out delay-150 path-1"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default App;
