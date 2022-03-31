import './App.css';

function App() {
    const td = <td>Knocky</td>
    const tr =
        <tr>
            <td>Breed</td>
            <td>Jack Russell</td>
            <td>Poodle</td>
            <td>Streetdog</td>
            <td>Cocker Spaniel</td>
        </tr>

    const table =
        <table>
            <tr>
                <td>&nbsp;</td>
                {/*Write a React component for <td>, which is a single data in the table.*/}
                {td}
                <td>Flor</td>
                <td>Ella</td>
                <td>Juan</td>
            </tr>
            {tr}
            <tr>
                <td>Age</td>
                <td>16</td>
                <td>9</td>
                <td>10</td>
                <td>5</td>
            </tr>
            <tr>
                <td>Owner</td>
                <td>Mother-in-law</td>
                <td>Me</td>
                <td>Me</td>
                <td>Sister-in-law</td>
            </tr>
            <tr>
                <td>Eating Habits</td>
                <td>Eats everyone's leftovers</td>
                <td>Nibbles at food</td>
                <td>Hearty eater</td>
                <td>Will eat till he explodes</td>
            </tr>
        </table>

  return (
    <div className="App">
        <table>
            <tr>
                <td>&nbsp;</td>
                {/*Write a React component for <td>, which is a single data in the table.*/}
                {td}
                <td>Flor</td>
                <td>Ella</td>
                <td>Juan</td>
            </tr>
            {tr}
            <tr>
                <td>Age</td>
                <td>16</td>
                <td>9</td>
                <td>10</td>
                <td>5</td>
            </tr>
            <tr>
                <td>Owner</td>
                <td>Mother-in-law</td>
                <td>Me</td>
                <td>Me</td>
                <td>Sister-in-law</td>
            </tr>
            <tr>
                <td>Eating Habits</td>
                <td>Eats everyone's leftovers</td>
                <td>Nibbles at food</td>
                <td>Hearty eater</td>
                <td>Will eat till he explodes</td>
            </tr>
        </table>

        <p>Write a React component for table, which contains a number of tr component.</p>
        {table}
    </div>
  );
}

export default App;
