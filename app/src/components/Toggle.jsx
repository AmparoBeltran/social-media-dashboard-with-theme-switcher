/* eslint-disable react/prop-types */
import { ToggleStyled } from "./styles/Toggle.styled";


export default function Toggle({ darkMode, onToggle }) {
    return (
        <ToggleStyled darkMode={darkMode}>
            <span>Dark Mode</span>
            <label className="toggle-switch">
                <input
                    type="checkbox"
                    checked={darkMode}
                    onChange={onToggle} />
                <span className="switch" />
            </label>
        </ToggleStyled>

    )
}