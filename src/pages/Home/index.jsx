import { Navigate } from "react-router-dom";
import { useSession } from "../../providers/SessionProvider";

function LandingPage() {
  const { checkStoredSession } = useSession();

  return (
    <section>
      <Navigate to={checkStoredSession() ? "/dashboard" : "/login"} />
    </section>
  );
}

export default LandingPage;
