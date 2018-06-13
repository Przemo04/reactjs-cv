import React from 'react';
import './AboutDescription.scss';

class AboutDescription extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			expanded: false
		};

	}

	onLinkClicked(event) {
		event.preventDefault();
		const { expanded } = this.state;
		this.setState({
			expanded: !expanded
		});

	}

	getMoreTextDiv() {
			if (this.state.expanded) {
				return <div> <p>W roku (2017) zostałem absolwentem studiów informatycznych na UwB. Ten kierunek studiów wybrałem nie bez powodu, ponieważ od około 16 roku życia nie rozstaje się
	z komuterem odkrywając wciąż nowe możliwości i technologie, które oferuje nam ta dziedzina. Gdy budowałem pierwsze strony internetowe jeszcze w czasach, gdy wykorzystywano
do tego tabelki, wiedziałem już, że technologie internetowe to będzie coś co chcę w życiu robić. Nieustający szybki rozwój technologii jeszcze bardziej inspiruje i zachęca do działania.
</p>
<p>
Na codzień jestem energiczną osobą. Każdy swój dzień staram się dokładnie planować i przez wiele lat wypracowałem metody organizacji i samodyscypliny, które są skuteczne i efektywne. Zaplanowane zadania wykonuję
konsekwentnie i starannie. Jestem odporny na stres, długą pracę oraz radzę sobię z natłokiem prac. Wolny czas staram się spędzać uprawiając sport. Jestem osobą otwartą, komunikatywną i nastawioną na współpracę.
</p>
</div>;
			} else {
				return null;
			}
	}

	render(){
		const expandedDiv = this.getMoreTextDiv();
		const buttonContent = this.state.expanded ? 'Ukryj' : 'Czytaj więcej';
		//const containerClass = this.state.expanded ? {Wiecej} : ''
		return(
			<div className="AboutDescription">
				<h2>O mnie</h2>
				<p>Cieszę się, że trafiłeś na moją personalną stronę ! :) </p>
				<p>Skoro to czytasz to prawdopodobnie chcesz czegoś dowiedzieć się o mnie. A więc, postaram się opisać moją historię zawodową jak i osobistą. </p>
				{expandedDiv}
				<a href="/" onClick={this.onLinkClicked.bind(this)}>
						<button>{buttonContent}</button>
				</a>
			</div>
		);
	}
}
export default AboutDescription;
