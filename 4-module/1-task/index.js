function makeFriendsList(friends) {
  let result = document.createElement("ul");
  friends.forEach((element) => {
    result.innerHTML += `<li> ${element.firstName} ${element.lastName} </li>`;
  });
  document.body.append(result);
  return result;
}
