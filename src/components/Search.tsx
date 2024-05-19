import { Input } from "@/components/ui/input";
import { Button } from "./ui/button";

type Props = {
  type: string;
  placeholder: string;
  buttonText: string;
};

const Search = ({ type, placeholder, buttonText }: Props) => {
  return (
    <div className="flex w-full max-w-sm items-center space-x-2">
      <Input type={type} placeholder={placeholder} />
      <Button className="bg-red-950" type="submit">
        {buttonText}
      </Button>
    </div>
  );
};

export default Search;
