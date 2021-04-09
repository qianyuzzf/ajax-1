let n = 1

getPAGES.onclick = () => {
  const request = new XMLHttpRequest()
  request.open('GET', `./page${n + 1}.json`)
  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status >= 200 && request.status < 300) {
      const page = request.response
      const array = JSON.parse(page)
      array.forEach(item => {
        let li = document.createElement('li')
        li.textContent = item.id
        pageName.appendChild(li)
      })
      n += 1
    }
  }
  request.send()
}

getJSON.onclick = () => {
  const request = new XMLHttpRequest()
  request.open('GET', './demo1.json')
  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status >= 200 && request.status < 300) {
      const object = JSON.parse(request.response)
      myName.textContent = object.name
    }
  }
  request.send()
}

getXML.onclick = () => {
  const request = new XMLHttpRequest()
  request.open('GET', './demo1.xml')
  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status >= 200 && request.status < 300) {
      const dom = request.responseXML
      const xml = dom.getElementsByTagName('warning')[0].textContent.trim()
      const div = document.createElement('div')
      div.innerText = xml
      document.body.appendChild(div)
    }
  }
  request.send()
}

getHTML.onclick = () => {
  const request = new XMLHttpRequest()
  request.open('GET', './demo1.html')
  request.onload = () => {
    const html = document.createElement('div')
    html.innerHTML = request.response
    document.body.appendChild(html)
  }
  request.onerror = () => {}
  request.send()
}

getJS.onclick = () => {
  const request = new XMLHttpRequest()
  request.open('GET', './demo1.js')
  request.onload = () => {
    const script = document.createElement('script')
    script.innerHTML = request.response
    document.body.appendChild(script)
  }
  request.onerror = () => {}
  request.send()
}

getCSS.addEventListener('click', () => {
  const request = new XMLHttpRequest()
  request.open('GET', './style.css')
  request.onreadystatechange = () => {
    if (request.readyState === 4) {
      if (request.status >= 200 && request.status < 300) {
        //http状态码200-299都表示成功
        const style = document.createElement('style')
        style.innerHTML = request.response
        document.head.appendChild(style)
      } else {
        alert('加载失败')
      }
    }
  }
  request.send()
})

//   request.onload = () => {
//     const style = document.createElement('style') //创建 style 标签
//     style.innerHTML = request.response //添加 HTML 内容
//     document.head.appendChild(style) //把标签放入 head 内部
//   }
//   request.onerror = () => {}
