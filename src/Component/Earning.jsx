import token from "../Asset/token.svg";
import stellar from "../Asset/stellar.svg";
import The_graph from "../Asset/The_graph.svg";
import SKALE from "../Asset/SKALE.svg";

const earnList = [
	{
		img: SKALE,
		name: (
			<p>
				SKALE <br />
			</p>
		),
		code: "SKL"

	},
	{
		img: token,
		name: (
			<p>
				Ampleforth <br />
				Governance Token
			</p>
		),
		code: "FORTH",
	},
	//{
	// 	img: celo,
	// 	name: "Celo",
	// 	code: "CGLD",
	// },
	{
		img: The_graph,
		name: "The Graph",
		code: "GRT",
	},
	{
		img: stellar,
		name: "Stella Lumens",
		code: "XLM",
	},


];

const EarnListItem = ({ img, name, code }) => {
	return (
		<div className="px-2 md:px-5 py-3 transition duration-500 hover:shadow-lg rounded-md border-b lg:border-none border-gray-200">
			<div className="flex">
				<img src={img} alt='Earn list' className="w-10 h-10" />
				<p className="my-auto ml-4 text-lg lg:text- font-medium col-span-2">
					{name}
				</p>
				<p className="my-auto ml-4 text-normal lg:text-normal font-medium hidden lg:block">
					{code}
				</p>
				<p className="my-auto text-right flex-grow text-green-500 col-span-3 font-medium">
					Earn $3 {code}
				</p>
			</div>
		</div>
	);
};

const Earn = () => {
	return (
		<div className="px-7 lg:px-16 lg:max-w-7xl w-full mx-auto py-10">
			<div className="grid grid-cols-1 lg:grid-cols-2">
				<div className="my-auto mx-auto lg:mx-0">
					<p className=" text-3xl md:text-3xl font-medium max-w-sm text-center lg:text-left">
						<span className='earn'>Earn up to $28 worth <br></br>of crypto</span>
					</p>
					<p className="mt-4 text-sm max-w-sm text-center lg:text-left">
						<span className='earnin'>Discover how specific cryptocurrencies work — and get a
						bit of each crypto to try out for yourself.</span>
						<button className='earn_button'> Start earning</button>
					</p>
					<div className="flex">
						<button
							className="bg-coinbase text-white text-sm px-4 py-3 mt-4 mx-auto lg:mx-0"
							style={{ borderRadius: "4px" }}
						>
							Start earning
						</button>
					</div>
				</div>
				<div className="mt-4 lg:mt-0">
					<div className="border lg:border-none border-gray-200 rounded-sm">
						{earnList.map((_item) => (
							<EarnListItem
								img={_item.img}
								name={_item.name}
								code={_item.code}
							/>
						))}
					</div>

					<div className="mt-3">
						<p className="ml-8 font-small text-coinbase hover:underline" >
							<h4 className="view_more">View more {">"}</h4>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Earn;