import BTC_Logo from "./../Asset/BTC_Logo.svg";
import ether from "./../Asset/ether.svg";
import BTC_cash from "./../Asset/BTC_cash.svg";
import Ltc from "./../Asset/Ltc.png";
import chart from "./../Asset/chart.png";
import "./../Component/buy.css";
const buy = [
  {
    id: 1,
    sym: BTC_Logo,
    Name: "Bitcoin",
    abbrv: "BTC",
    Price: "GHS 293.194.94",
    Change: "-11.80%",

  },
  {
    id: 2,
    sym: ether,
    Name: "Etheruem",
    abbrv: "ETH",
    Price: "GHS 22,722.37",
    Change: "-8.99%",
    
  },
  {
    id: 3,
    sym: BTC_cash,
    Name: "Bitcoin Cash",
    abbrv: "BCH",
    Price: "GHS 7,556.67",
    Change: "-16.70%",
  },
  {
    id: 4,
    sym: Ltc,
    Name: "Litecoin",
    abbrv: "LTC",
    Price: "GHS 1,774.84",
    Change: "-12.82%",
  },
];

const Buy = () => {
  const btnStyle = {
    border: " 3px",
    borderRadius: "4px",
    backgroundColor: "rgb(5,177,105)",
    color: "white",
    width:'70px',
    fontWeight: 200,
  };

  return (
    <div className="coinTable-container">
      <table className="coinTable">
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Price</th>
          <th>Change</th>
          <th>Chart</th>
          <th>Trade</th>
        </tr>
        {buy.map((coin) => (
          <tr>
            <td>
              <span style={{ color: "grey" }}>{coin.id}</span>
            </td>

            <td className="Name">
              <div style={{ marginLeft: "30px" }}>
                <img className="coin" src={coin.sym} alt='Type of Cryptocurrency'></img>
                <>
                  {coin.Name}{" "}
                  <span style={{ color: "grey" }}>{coin.abbrv}</span>
                </>
              </div>
            </td>
            <td>{coin.Price}</td>
            <td>
              <span style={{ color: "red" }}>{coin.Change}</span>
            </td>
            <td>
              <img className="chart" src={chart} alt='Chart displaying growwth or fall of coin'></img>
            </td>
            <td>
              <button style={btnStyle}>Buy</button>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default Buy;