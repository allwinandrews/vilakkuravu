export default function SignUpPasswordInvalidList(props) {
  return (
    <ul className={props.className}>
      <li>
        <a>At least one upper case English letter</a>
      </li>
      <li>
        <a>At least one lower case English letter</a>
      </li>
      <li>
        <a>At least one digit</a>
      </li>
      <li>
        <a>At least one special character</a>
      </li>
      <li>
        <a>Minimum 8 Characters</a>
      </li>
    </ul>
  );
}
