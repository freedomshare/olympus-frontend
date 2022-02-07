import { Link } from "@material-ui/core";
import { Icon } from "@olympusdao/component-library";

export default function Social() {
  return (
    <div className="social-row">
      <Link href="https://t.me/dapp4sale" target="_blank">
        <Icon name={"medium"} />
      </Link>

      <Link href="https://t.me/dapp4sale" target="_blank">
        <Icon name={"twitter"} />
      </Link>

      <Link href="https://t.me/dapp4sale" target="_blank">
        <Icon name={"discord"} />
      </Link>
    </div>
  );
}
