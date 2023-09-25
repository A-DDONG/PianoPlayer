import React, { useEffect, useRef, useState } from "react";
import logo from "./logo.svg";
import "./App.css";

const createNoteTable = () => {
  const noteFreq = [];
  for (let i = 0; i < 9; i++) {
    noteFreq[i] = [];
  }

  noteFreq[0]["A"] = 27.5;
  noteFreq[0]["A#"] = 29.135235094880619;
  noteFreq[0]["B"] = 30.867706328507756;

  noteFreq[1]["C"] = 32.703195662574829;
  noteFreq[1]["C#"] = 34.647828872109012;
  noteFreq[1]["D"] = 36.708095989675945;
  noteFreq[1]["D#"] = 38.890872965260113;
  noteFreq[1]["E"] = 41.203444614108741;
  noteFreq[1]["F"] = 43.653528929125485;
  noteFreq[1]["F#"] = 46.249302838954299;
  noteFreq[1]["G"] = 48.999429497718661;
  noteFreq[1]["G#"] = 51.913087197493142;
  noteFreq[1]["A"] = 55.0;
  noteFreq[1]["A#"] = 58.270470189761239;
  noteFreq[1]["B"] = 61.735412657015513;
  // …

  noteFreq[2]["C"] = 65.406391325149658;
  noteFreq[2]["C#"] = 69.295657744218024;
  noteFreq[2]["D"] = 73.41619197935189;
  noteFreq[2]["D#"] = 77.781745930520227;
  noteFreq[2]["E"] = 82.406889228217482;
  noteFreq[2]["F"] = 87.307057858250971;
  noteFreq[2]["F#"] = 92.498605677908599;
  noteFreq[2]["G"] = 97.998858995437323;
  noteFreq[2]["G#"] = 103.826174394986284;
  noteFreq[2]["A"] = 110.0;
  noteFreq[2]["A#"] = 116.540940379522479;
  noteFreq[2]["B"] = 123.470825314031027;

  noteFreq[3]["C"] = 130.812782650299317;
  noteFreq[3]["C#"] = 138.591315488436048;
  noteFreq[3]["D"] = 146.83238395870378;
  noteFreq[3]["D#"] = 155.563491861040455;
  noteFreq[3]["E"] = 164.813778456434964;
  noteFreq[3]["F"] = 174.614115716501942;
  noteFreq[3]["F#"] = 184.997211355817199;
  noteFreq[3]["G"] = 195.997717990874647;
  noteFreq[3]["G#"] = 207.652348789972569;
  noteFreq[3]["A"] = 220.0;
  noteFreq[3]["A#"] = 233.081880759044958;
  noteFreq[3]["B"] = 246.941650628062055;

  noteFreq[4]["C"] = 261.625565300598634;
  noteFreq[4]["C#"] = 277.182630976872096;
  noteFreq[4]["D"] = 293.66476791740756;
  noteFreq[4]["D#"] = 311.12698372208091;
  noteFreq[4]["E"] = 329.627556912869929;
  noteFreq[4]["F"] = 349.228231433003884;
  noteFreq[4]["F#"] = 369.994422711634398;
  noteFreq[4]["G"] = 391.995435981749294;
  noteFreq[4]["G#"] = 415.304697579945138;
  noteFreq[4]["A"] = 440.0;
  noteFreq[4]["A#"] = 466.163761518089916;
  noteFreq[4]["B"] = 493.883301256124111;

  noteFreq[5]["C"] = 523.251130601197269;
  noteFreq[5]["C#"] = 554.365261953744192;
  noteFreq[5]["D"] = 587.32953583481512;
  noteFreq[5]["D#"] = 622.253967444161821;
  noteFreq[5]["E"] = 659.255113825739859;
  noteFreq[5]["F"] = 698.456462866007768;
  noteFreq[5]["F#"] = 739.988845423268797;
  noteFreq[5]["G"] = 783.990871963498588;
  noteFreq[5]["G#"] = 830.609395159890277;
  noteFreq[5]["A"] = 880.0;
  noteFreq[5]["A#"] = 932.327523036179832;
  noteFreq[5]["B"] = 987.766602512248223;

  noteFreq[6]["C"] = 1046.502261202394538;
  noteFreq[6]["C#"] = 1108.730523907488384;
  noteFreq[6]["D"] = 1174.659071669630241;
  noteFreq[6]["D#"] = 1244.507934888323642;
  noteFreq[6]["E"] = 1318.510227651479718;
  noteFreq[6]["F"] = 1396.912925732015537;
  noteFreq[6]["F#"] = 1479.977690846537595;
  noteFreq[6]["G"] = 1567.981743926997176;
  noteFreq[6]["G#"] = 1661.218790319780554;
  noteFreq[6]["A"] = 1760.0;
  noteFreq[6]["A#"] = 1864.655046072359665;
  noteFreq[6]["B"] = 1975.533205024496447;

  noteFreq[7]["C"] = 2093.004522404789077;
  noteFreq[7]["C#"] = 2217.461047814976769;
  noteFreq[7]["D"] = 2349.318143339260482;
  noteFreq[7]["D#"] = 2489.015869776647285;
  noteFreq[7]["E"] = 2637.020455302959437;
  noteFreq[7]["F"] = 2793.825851464031075;
  noteFreq[7]["F#"] = 2959.955381693075191;
  noteFreq[7]["G"] = 3135.963487853994352;
  noteFreq[7]["G#"] = 3322.437580639561108;
  noteFreq[7]["A"] = 3520.0;
  noteFreq[7]["A#"] = 3729.310092144719331;
  noteFreq[7]["B"] = 3951.066410048992894;

  noteFreq[8]["C"] = 4186.009044809578154;
  return noteFreq;
};

const App = () => {
  const [noteFreq, setNoteFreq] = useState(null);
  const [mainGainNode, setMainGainNode] = useState(null);
  const [oscList, setOscList] = useState([]);
  const audioContext = useRef(new AudioContext());
  const volumeControl = useRef(null);

  const keyCodes = useRef([
    "Space",
    "ShiftLeft",
    "KeyZ",
    "KeyX",
    "KeyC",
    "KeyV",
    "KeyB",
    "KeyN",
    "KeyM",
    "Comma",
    "Period",
    "Slash",
    "ShiftRight",
    "KeyA",
    "KeyS",
    "KeyD",
    "KeyF",
    "KeyG",
    "KeyH",
    "KeyJ",
    "KeyK",
    "KeyL",
    "Semicolon",
    "Quote",
    "Enter",
    "Tab",
    "KeyQ",
    "KeyW",
    "KeyE",
    "KeyR",
    "KeyT",
    "KeyY",
    "KeyU",
    "KeyI",
    "KeyO",
    "KeyP",
    "BracketLeft",
    "BracketRight",
    "Digit1",
    "Digit2",
    "Digit3",
    "Digit4",
    "Digit5",
    "Digit6",
    "Digit7",
    "Digit8",
    "Digit9",
    "Digit0",
    "Minus",
    "Equal",
    "Backspace",
    "Escape",
  ]);

  useEffect(() => {
    setNoteFreq(createNoteTable());
    const gainNode = audioContext.current.createGain();
    gainNode.connect(audioContext.current.destination);
    setMainGainNode(gainNode);
    const keyNote = (event) => {
      const index = keyCodes.current.indexOf(event.code);
      const elKey = document.querySelectorAll(".key")[index];
      if (elKey) {
        const octaveIdx = parseInt(elKey.textContent.slice(-1), 10);
        const note = elKey.textContent.slice(0, -1);
        const freq = noteFreq[octaveIdx][note];
        if (event.type === "keydown") {
          elKey.tabIndex = -1;
          elKey.focus();
          elKey.classList.add("active");
          notePressed({ buttons: 1, target: elKey }, freq);
        } else {
          elKey.classList.remove("active");
          noteReleased({ buttons: 1, target: elKey });
        }
        event.preventDefault();
      }
    };

    window.addEventListener("keydown", keyNote);
    window.addEventListener("keyup", keyNote);

    return () => {
      window.removeEventListener("keydown", keyNote);
      window.removeEventListener("keyup", keyNote);
    };
  }, [noteFreq]);

  const changeVolume = (event) => {
    mainGainNode.gain.value = event.target.value;
  };

  const notePressed = (event, freq) => {
    if (event.buttons & 1) {
      const osc = audioContext.current.createOscillator();
      osc.connect(mainGainNode);
      osc.type = "sine"; // 웨이브폼 타입 설정
      osc.frequency.value = freq;
      osc.start();

      // oscList 업데이트 로직 (예시)
      // setOscList(...)
    }
  };

  const noteReleased = (event, osc) => {
    if (osc) {
      osc.stop();
      // oscList 업데이트 로직 (예시)
      // setOscList(...)
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div className="container">
        <div className="keyboard">
          {noteFreq &&
            noteFreq.map((octave, idx) => (
              <div className="octave" key={idx}>
                {Object.entries(octave).map(([note, freq]) => (
                  <div
                    className={`key ${
                      note.length > 1 ? "black-key" : "white-key"
                    }`} // 흑건, 백건 구분
                    data-key={`Key${note}`} // 키보드 키와 매핑
                    key={note}
                    onMouseDown={(e) => notePressed(e, freq)}
                    onMouseUp={(e) => noteReleased(e)}
                  >
                    <span className="keyname">{`${note}${idx}`}</span>
                  </div>
                ))}
              </div>
            ))}
        </div>
      </div>
      <div className="settingsBar">
        <div className="left">
          <span>Volume: </span>
          <input
            ref={volumeControl}
            type="range"
            min="0.0"
            max="1.0"
            step="0.01"
            defaultValue="0.5"
            onChange={changeVolume}
          />
        </div>
        {/* 웨이브폼 선택 등의 추가 설정 */}
      </div>
    </div>
  );
};

export default App;
