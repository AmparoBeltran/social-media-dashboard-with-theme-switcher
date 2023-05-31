import { useState } from "react";
import { DashboardStyled } from "./styles/Dashboard.styled";
import Toggle from "./Toggle";
import CardTotal from "./CardTotal";
import CardOverviewToday from "./CardOverviewToday";

export default function Dashboard() {
    const [darkMode, setDarkMode] = useState(false)

    function handleToggle() {
        setDarkMode((mode) => !mode)
    }
    return (
        <DashboardStyled darkMode={darkMode}>
            <header>
                <div className="title">
                    <h1>Social Media Dashboard</h1>
                    <span>Total Followers: 23,004</span>
                </div>
                <hr />
                <Toggle
                    darkMode={darkMode}
                    onToggle={() => handleToggle()}
                />
            </header>
            <div className="wrapper">

                <CardTotal darkMode={darkMode} />


                <h2>Overview - Today</h2>
                <CardOverviewToday darkMode={darkMode} />
            </div>

        </DashboardStyled>
    )
}