/*
 * Copyright (C) 2017 Adam Faryna <adamfaryna@appdy.net>
 *
 * Distributed under terms of the BSD 2-Clause license.
 */
const express = require('express');

const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.static('dist'));

app.listen(PORT, () => console.log(`Server listening at port ${PORT}`));
