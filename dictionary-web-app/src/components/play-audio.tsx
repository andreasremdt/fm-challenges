import type { Component } from "solid-js";
import { createSignal, onCleanup, Switch, Match, Show } from "solid-js";

import { getPhoneticAudio } from "../lib/utils";
import styles from "./play-audio.module.css";

import type { Word } from "../types";

type PlayAudioProps = {
  definition: Word;
};

enum PlayerState {
  Idle,
  Playing,
  Loading,
  Paused,
  Ended,
}

const PlayAudio: Component<PlayAudioProps> = (props) => {
  const [state, setState] = createSignal(PlayerState.Idle);
  const player = new Audio();

  const handleLoadStart = () => setState(PlayerState.Loading);
  const handleStartPlay = () => setState(PlayerState.Playing);
  const handleFinishPlay = () => setState(PlayerState.Ended);
  const handlePause = () => setState(PlayerState.Paused);

  const audio = getPhoneticAudio(props.definition);

  const handleClick = () => {
    switch (state()) {
      case PlayerState.Idle:
        player.src = audio || "";
        player.play();
        break;

      case PlayerState.Ended:
        player.play();
        break;

      case PlayerState.Paused:
        player.play();
        break;

      case PlayerState.Playing:
        player.pause();
        break;
    }
  };

  player.addEventListener("loadstart", handleLoadStart);
  player.addEventListener("canplaythrough", handleStartPlay);
  player.addEventListener("play", handleStartPlay);
  player.addEventListener("ended", handleFinishPlay);
  player.addEventListener("pause", handlePause);

  onCleanup(() => {
    player.removeEventListener("loadstart", handleLoadStart);
    player.removeEventListener("canplaythrough", handleStartPlay);
    player.removeEventListener("play", handleStartPlay);
    player.removeEventListener("ended", handleFinishPlay);
    player.removeEventListener("pause", handlePause);
  });

  return (
    <Show when={audio}>
      <button type="button" class={styles.button} title={`Read ${props.definition.word} loud`} onClick={handleClick}>
        <Switch>
          <Match when={state() === PlayerState.Idle || state() === PlayerState.Paused || state() === PlayerState.Ended}>
            <svg width="32" height="32" viewBox="0 0 32 32">
              <path fill="currentColor" d="M6 4l20 12-20 12z" />
            </svg>
          </Match>
          <Match when={state() === PlayerState.Playing}>
            <svg width="32" height="32" viewBox="0 0 32 32">
              <path fill="currentColor" d="M4 4h10v24h-10zM18 4h10v24h-10z" />
            </svg>
          </Match>
          <Match when={state() === PlayerState.Loading}>
            <svg width="32" height="32" viewBox="0 0 32 32" class={styles.loading}>
              <path
                fill="currentColor"
                d="M16 32c-4.274 0-8.292-1.664-11.314-4.686s-4.686-7.040-4.686-11.314c0-3.026 0.849-5.973 2.456-8.522 1.563-2.478 3.771-4.48 6.386-5.791l1.344 2.682c-2.126 1.065-3.922 2.693-5.192 4.708-1.305 2.069-1.994 4.462-1.994 6.922 0 7.168 5.832 13 13 13s13-5.832 13-13c0-2.459-0.69-4.853-1.994-6.922-1.271-2.015-3.066-3.643-5.192-4.708l1.344-2.682c2.615 1.31 4.824 3.313 6.386 5.791 1.607 2.549 2.456 5.495 2.456 8.522 0 4.274-1.664 8.292-4.686 11.314s-7.040 4.686-11.314 4.686z"
              />
            </svg>
          </Match>
        </Switch>
      </button>
    </Show>
  );
};

export default PlayAudio;
