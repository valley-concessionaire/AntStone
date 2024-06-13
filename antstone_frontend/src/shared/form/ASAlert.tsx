import {
    Alert,
    AlertDescription,
    AlertTitle,
  } from "../../components/ui/alert"
import { ExclamationTriangleIcon } from "@radix-ui/react-icons"

interface Props {
    message: string
}

export default function ASAlert({message}: Props) {

    return (
        <Alert
            className="absolute top-32  z-10 w-96"
            variant="destructive">
            <ExclamationTriangleIcon className="h-4 w-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>
              {message}
            </AlertDescription>
          </Alert>
    );
}