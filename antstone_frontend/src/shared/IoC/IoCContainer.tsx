import CookieAuthManager from "../security/CookieAuthManager";
import IAuthManager from "../security/IAuthManager";

const IoCContainer = {
    /**
     * Returns an instance (Singleton pattern) of the IAuthManager interface, 
     * which is implemented by the CookieAuthManager class.
     *
     * @return {IAuthManager} An instance of the IAuthManager interface.
     */
    getAuthManager() : IAuthManager{
        return new CookieAuthManager();
    }
}

export default IoCContainer;