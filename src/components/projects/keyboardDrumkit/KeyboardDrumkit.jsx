import React, { useEffect } from 'react';

import './KeyboardDrumkit.css';
import sounds from './sounds/index';

const KeyboardDrumkit = (props) => {
  useEffect(() => {
    function playSound(e) {
      const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
      const audio = sounds[e.keyCode];

      if (!audio) return;

      if (audio.paused) {
        audio.play();
      } else {
        audio.currentTime = 0;
      }

      key.classList.add('playing');
    }

    function removeTransition(e) {
      if (e.propertyName !== 'transform') return;
      this.classList.remove('playing');
    }

    const keys = document.querySelectorAll('.key');
    keys.forEach((key) =>
      key.addEventListener('transitionend', removeTransition)
    );

    window.addEventListener('keydown', playSound);

    return () => window.removeEventListener('mouseup', props.onEvent);
  }, [props.onEvent]);

  return (
    <div className="keyboardDrumkit-wrapper">
      <div className="keys">
        <div data-key="65" className="key">
          <kbd>A</kbd>
          <span className="sound">clap</span>
        </div>
        <div data-key="83" className="key">
          <kbd>S</kbd>
          <span className="sound">hihat</span>
        </div>
        <div data-key="68" className="key">
          <kbd>D</kbd>
          <span className="sound">kick</span>
        </div>
        <div data-key="70" className="key">
          <kbd>F</kbd>
          <span className="sound">openhat</span>
        </div>
        <div data-key="71" className="key">
          <kbd>G</kbd>
          <span className="sound">boom</span>
        </div>
        <div data-key="72" className="key">
          <kbd>H</kbd>
          <span className="sound">ride</span>
        </div>
        <div data-key="74" className="key">
          <kbd>J</kbd>
          <span className="sound">snare</span>
        </div>
        <div data-key="75" className="key">
          <kbd>K</kbd>
          <span className="sound">tom</span>
        </div>
        <div data-key="76" className="key">
          <kbd>L</kbd>
          <span className="sound">tink</span>
        </div>
      </div>
    </div>
  );
};

export default KeyboardDrumkit;
