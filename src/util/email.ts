export function getInfoMailAddress(): string {
  const user = "hiddenUserStartsHereofniAndEndsHere"
    .split("")
    .reverse()
    .join("")
    .substring(11, 15);

  const domain = "hiddenDomainStartsHeresedoc.fpokAndEndsHere"
    .split("")
    .reverse()
    .join("")
    .substring(11, 21);
  return `${user}@${domain}`;
}

export function getMailToInfoLink(): string {
  return `mailto://${getInfoMailAddress()}`;
}
