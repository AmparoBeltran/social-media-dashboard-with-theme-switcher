/* eslint-disable react/prop-types */
import { todayData } from "../data";
import { CardOverviewTodayStyled, CardStyled } from "./styles/CardOverviewToday.styled";

export default function CardOverviewToday({ darkMode }) {
    return (
        <CardOverviewTodayStyled darkMode={darkMode}>
            {todayData.map((item) => (
                <CardStyled key={item.index} percentage={item.percentage} darkMode={darkMode} >
                    <div className="social">
                        <span>{item.title}</span>
                        <img src={item.social} alt="social-icon" />
                    </div>
                    <div className="total">
                        <h1>{item.total}</h1>
                        <div className="percentage">
                            {item.percentage > 0 ? <img src="/images/icon-up.svg" alt="arrow up" /> : <img src="/images/icon-down.svg" alt="arrow down" />
                            }
                            <small>{Math.abs(item.percentage)}</small>
                            <small>%</small>
                        </div>
                    </div>
                </CardStyled>
            ))}
        </CardOverviewTodayStyled>
    )
}