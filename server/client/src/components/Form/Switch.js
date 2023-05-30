import React from "react";
import { SwitchWrapper } from "./style";

function ToggleSwitch({ label, isToggled, onChange, className }) {
  return (
    <SwitchWrapper className={className}>
      <label className="switch-label">{label}</label>
      <label className="toggle-switch">
        <input type="checkbox" checked={isToggled} onChange={onChange} />
        <span className="switch" />
      </label>
    </SwitchWrapper>
  );
}
export default ToggleSwitch;
