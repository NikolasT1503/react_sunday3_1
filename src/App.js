import "./App.css";
import { Cell, Column, Table } from "@blueprintjs/table";

function App() {
  const numRows = 3;
  const data = {
    headers: { artist: "Исполнитель", album: "Альбом", song: "Песня" },
    rows: [
      {
        artist: "Киркоров",
        album: "Синий",
        song: "Я твой зайчик",
      },
      {
        artist: "Michael Jackson",
        album: "Earth",
        song: "Earth",
      },
      {
        artist: "Пугачева",
        album: "Арлекино",
        song: "Арлекино",
      }
    ]
  };

  const cellRenderer = (name) => (rowIndex) => (
    <Cell>{data.rows[rowIndex][name]}</Cell>
  );

  return (
    <Table numRows={numRows}>
      <Column name={data.headers.artist} cellRenderer={cellRenderer("artist")} />
      <Column name={data.headers.album} cellRenderer={cellRenderer("album")} />
      <Column name={data.headers.song} cellRenderer={cellRenderer("song")} />
    </Table>
  );
}

export default App;
