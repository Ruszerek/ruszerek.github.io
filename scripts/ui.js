class ChatUI {
  constructor(list){
    this.list = list;
  }
  clear(){
    this.list.innerHTML = '';
  }
  render(data){
    const when = new Date();
    const html = `
      <li class="list-group-item">
        <span class="username">${data.username}</span>
        <span class="message">${data.message}</span>
        <div class="time">${when}</span>
      </li>
    `;
    this.list.innerHTML += html;
  }
}
