// 导入必要的模块
const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const port = process.env.PORT || 3000;
const app = express();
app.use(bodyParser.json());


// 读取文件，初始化data
const dataFile = 'models.json';
let data = {};
try {
    const dataString = fs.readFileSync(dataFile, 'utf8');
    data = JSON.parse(dataString);
    if (!data.models) {
        data.models = []; // 如果 JSON 文件中没有，则初始化为空数组
    }
} catch (err) {
    console.error('Error reading or parsing models.json:', err);
    data = { models: [] };    // 初始化一个空的 data 对象，防止服务器崩溃。
}



// API 路由

// 返回 index.html
app.get('/', (req, res) => {
    const indexPath = path.join(__dirname, 'index.html');
    if (fs.existsSync(indexPath)) {
        res.sendFile(indexPath);
    } else {
        res.status(404).json({ message: 'Model not found' });
    }
});


// 返回 demo.html
app.get('/demo', (req, res) => {
    const indexPath = path.join(__dirname, 'demo.html');
    if (fs.existsSync(indexPath)) {
        res.sendFile(indexPath);
    } else {
        res.status(404).json({ message: 'Model not found' });
    }
});



// 获取所有 (GET /models)
app.get('/api/models', (req, res) => {
	const models = data.models
    res.json(models);
});

// 获取单个 model (GET /model/:id)
app.get('/api/models/:id', (req, res) => {
    const modelId = parseInt(req.params.id); // 将字符串 ID 转换为整数
    const model = data.models.find(model => model.id === modelId);

    if (model) {
        res.json(model);
    } else {
		console.error('Model not found');
        res.status(404).json({ message: 'Model not found' });
    }
});


// 启动服务器
app.listen(port, () => {
  console.log('Server is running on port ${port}');
});

