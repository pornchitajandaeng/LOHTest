import "./styles.css";
export default function App() {
  return (
    <div className="App">
      <Chmod permission={"rwxrwxr-x"} /> {/*775*/}
      <Chmod permission={"-r-w------"} /> {/*600*/}
      <Chmod permission={"r-wr----r"} /> {/*644*/}
      <Chmod permission={"-rwxrwxr-x"} /> {/*775*/}
      <Chmod permission={"-r-x---r-x"} /> {/*505*/}
      <Chmod permission={"-rw-rw-rw-"} /> {/*666*/}
      <Chmod permission={"-r--r--r--"} /> {/*444*/}
      <Chmod permission={"---x--x--x"} /> {/*111*/}
      <Chmod permission={"-rw-------"} /> {/*600*/}
      <Chmod permission={"-rw-rw-r--"} /> {/*644*/}
    </div>
  );
}

const Chmod = (props) => {
  const { permission } = props;
  function convert(chmodStr) {
    // code here.
    // const result = "";
    // return result;

    if (typeof chmodStr !== 'string' || chmodStr.length !== 9) {
      throw new Error('Invalid chmod string. It should be a string of length 9.');
    }

    const symbols = ['r', 'w', 'x', '-'];
    const values = [4, 2, 1, 0];
  
    let numericValue = 0;
  
    for (let i = 0; i < chmodStr.length; i++) {
      const char = chmodStr[i];
      const index = symbols.indexOf(char);
  
      if (index === -1) {
        throw new Error('Invalid character in chmod string: ' + char);
      }
  
      numericValue += values[index] * Math.pow(8, 2 - (i % 3));
    }
  
    return numericValue;
  }

  return (
    <>
      <p>
        {`[ ${permission} ] =  `}
        {convert(permission)}
      </p>
    </>
  );
};
