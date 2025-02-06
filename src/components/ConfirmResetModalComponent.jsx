export default function ConfirmResetModalComponent(props) {
  const {
    cancelRestartGame,
    restartGame
  } = props;

    return (
      <div className="mx-8 p-8 rounded bg-rose-400 text-3xl uppercase font-bold !z-10 text-center">
        <br />
        Are you sure you want to restart the game?
        <br />
        <br />
        <br />
        <br />
        <div className="flex justify-center">
          <div
            className="border-4 rounded border-rose-200 bg-rose-300 cursor-pointer m-6 p-4 w-28"
            onClick={restartGame}
          >
            Yes
          </div>
          <div
            className="border-4 rounded border-rose-200 bg-rose-300 cursor-pointer m-6 p-4 w-28"
            onClick={cancelRestartGame}
          >
            No
          </div>
        </div>
      </div>
    );

}
