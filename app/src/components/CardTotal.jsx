/* eslint-disable react/prop-types */
import { allTimeData } from "../data";
import { CardStyled, CardTotalStyled } from "./styles/CardTotalStyled";

export default function CardTotal({ darkMode }) {
    return (
        <CardTotalStyled darkMode={darkMode}>
            {allTimeData.map((item) => (
                <CardStyled key={item.social} today={item.today} border={item.border} darkMode={darkMode}>
                    <div className="social-account">
                        <img src={item.social} alt="social-icon" />
                        <small>{item.account}</small>
                    </div>
                    <div className="followers">
                        <h1>{item.followers}</h1>
                        <span>followers</span>
                    </div>
                    <div className="today-total">
                        {item.today > 0 ? <img src="/images/icon-up.svg" alt="arrow up" /> : <img src="/images/icon-down.svg" alt="arrow down" />
                        }
                        <small>{Math.abs(item.today)}</small>
                        <small>Today</small>
                    </div>
                </CardStyled>
            ))}
        </CardTotalStyled>
    )
}