import { useState } from "react";
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Label } from "../components/ui/label"
import MiImagen from "../images/LoginPageImg.jpg"
import IoCContainer from "../shared/IoC/IoCContainer";
import IAuthManager from "../shared/security/IAuthManager";
import { Credentials } from "../shared/security/models/credentials";
import { useNavigate } from "react-router-dom";
import requests from "../shared/api/agent";
import FormButton from "../shared/form/FormButton";
import ASAlert from "../shared/form/ASAlert";
import { wait } from "@testing-library/user-event/dist/utils";


export function LoginPage() {


  const authManager: IAuthManager = IoCContainer.getAuthManager();

  const [credentials, setCredentials] = useState<Credentials>({
    email: "",
    password: "",
  });

  const [hasError, setHasError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const onInputChange = (name: string, value: string) => {
    setCredentials({ ...credentials, [name]: value });
  };

  const onSubmit = async (e: any) => {
    e.preventDefault();
    setHasError(false);
    setIsLoading(true);
    try {
      const authInfo = await requests.post("/users/authenticate", credentials);
      authManager.saveAuthentication(authInfo.access, authInfo.refresh, authInfo.user);
      window.location.href = "/";
    } catch (error) {
      setHasError(true);
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full h-scree h-screen h-screennn lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]">
      <div className={`relative flex items-center justify-center py-12 }`}>
        {hasError &&
        <div className={`invisible ${hasError ? "" : "invisible"}`}>
 <ASAlert message= {
            "Error, el email o la contraseña son incorrectos."
          }
          />
        </div>
        }
        <form
          onSubmit={onSubmit}>

          <div className="mx-auto grid w-[350px] gap-6">
            <div className="grid gap-2 text-center">
              <h1 className="text-3xl font-bold">AntStone</h1>
              <p className="text-balance text-muted-foreground">
                Digite sus credenciales para iniciar sesión
              </p>
            </div>
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="emailAddress"
                  type="email"
                  name="email"
                  placeholder="m@example.com"
                  required
                  value={credentials.email}
                  onChange={(e) => onInputChange(e.target.name, e.target.value)}
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Contraseña</Label>
                </div>
                <Input
                  id="password"
                  type="password"
                  name="password"
                  required
                  value={credentials.password}
                  onChange={(e) => onInputChange(e.target.name, e.target.value)}
                />
              </div>
              <FormButton
                enabled={!isLoading}
                isLoading={isLoading}
                text="Iniciar sesión"
              />
            </div>
          </div>
        </form>
      </div>
      <div className="hidden bg-muted lg:block">
        <img
          src={MiImagen}
          alt="Image"
          //width="1920"
          //height="1080"
          className="h-full w-full object-cover dark:brightness-[0.8] grayscale"
        />
      </div>
    </div>
  )
}
