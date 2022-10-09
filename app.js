import express from 'express';
const app = express();
import path from 'path';
import methodOverride from 'method-override';

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
	res.render('/index');
});

app.listen(3000, () => {
	console.log('Listening on Port 3000');
});
