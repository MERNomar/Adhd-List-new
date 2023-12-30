import { useUser } from "../../../store/authState";
import { Person } from "@mui/icons-material";

export default function UserSettingsNavButton() {
  const setLogout = useUser((user) => user.setLogout);

  return (
    <button onClick={() => setLogout(null)} className=" nav-item">
      <Person className="icon-button" />
    </button>
  );
}
