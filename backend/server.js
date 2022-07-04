const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;
app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri);
const connection =mongoose.connection;

connection.once('open',()=>{
    console.log("MongoDB database connection established successfully");
})

const playersRouter =require("./routes/players");
const usersRouter =require("./routes/users");
const enquiryRouter =require("./routes/enquiry");
const gameRatingRouter =require("./routes/game_rating");
const goalkeeperRouter =require("./routes/goalkeeper");
const centralDefenderRouter =require("./routes/central_defender");
const wideDefenderRouter =require("./routes/wide_defender");
const midfielderRouter = require("./routes/midfielder");
const attackingMidfielderCenterRouter = require("./routes/attacking_midfielder_center");
const attackingMidfielderWideRouter = require("./routes/attacking_midfielder_wide");
const forwardRouter = require("./routes/forward");
const injuryRouter = require("./routes/injury");
const teamRouter = require("./routes/team");
const trainingRouter = require("./routes/training");
app.use('/players',playersRouter);
app.use('/users',usersRouter);
app.use('/enquiry',enquiryRouter);
app.use('/gameRating',gameRatingRouter);
app.use('/goalkeeper',goalkeeperRouter);
app.use('/central_defender',centralDefenderRouter);
app.use('/wide_defender',wideDefenderRouter);
app.use('/midfielder',midfielderRouter);
app.use('/attacking_midfielder_center',attackingMidfielderCenterRouter);
app.use('/attacking_midfielder_wide',attackingMidfielderWideRouter);
app.use('/forward',forwardRouter);
app.use('/injury',injuryRouter);
app.use('/team',teamRouter);
app.use('/training',trainingRouter);

//app.use(express.errorHandler({showStack: true, dumpExceptions: true}));

app.listen(port,()=>{
    console.log(`Server is running on port : ${port}`)
})