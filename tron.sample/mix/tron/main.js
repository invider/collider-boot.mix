const { app, BrowserWindow, Menu, MenuItem } = require('electron')

let win


const menu = new Menu()
const menuTemplate = [
    {
        name: 'collider',
        label: 'collider',
        submenu: [
            {
                label: 'Fullscreen',
                accelerator: 'CmdOrCtrl+F',
                click: () => {
                    if (win.isFullScreen()) {
                        win.setFullScreen(false)
                    } else {
                        win.setFullScreen(true)
                    }
                }
            },
            { 
                label: 'Dev Tools',
                accelerator: 'CmdOrCtrl+T',
                click: () => {
                    win.webContents.openDevTools()
                }
            },
            {
                type: 'separator',
            },
            {
                label: 'Exit',
                accelerator: 'CmdOrCtrl+X',
                click: () => {
                    app.exit()
                }
            },
        ],
        click: () => {
            console.log('going fullscreen?')
        }
    },
    /*
    {
        label: 'edit',
        submenu: [
            {
                label: 'snarf',
            },
            {
                label: 'plumb',
            },
        ]
    }
    */
]

function createWindow () {
    //let win = new BrowserWindow({ width: 800, height: 600 })
    win = new BrowserWindow({
        title: 'Collider.JAM',
        width: 800,
        height: 600,
        frame: true,
        center: true,
        backgroundColor: '#2e2c29',
    })

    win.maximize()
    win.setFullScreen(true)
    //win.setMenu(menu)
    //win.setMenu(null)
    //win.removeMenu()
	//win.webContents.openDevTools()
    Menu.setApplicationMenu(Menu.buildFromTemplate(menuTemplate))
    //Menu.setApplicationMenu(null)

	win.on('closed', () => {
		win = null
	})

    //win.loadURL('https://github.com')
    win.loadFile('index.html')

    /*
    globalShortcut.register('CommandOrControl+Y', () => {
        console.log('command!')
    })
    */
}
app.on('ready', createWindow)

app.on('window-all-closed', () => {
    /*
    if (process.platform !== 'darwin') {
        app.quit()
    }
    */
    app.quit()
})

app.on('activate', () => {
  if (win === null) {
    createWindow()
  }
})

const fs = require('fs')
//const root = fs.readdirSync('/')
//console.dir(root)
const dir = fs.readdirSync('.')
console.dir(dir)

