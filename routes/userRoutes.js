const express = require('express');
const router = express.Router();

const { findById, findByRegistrationNumber, getUsers, requestPasswordReset, resetPassword, signIn, signInAsStudent, signUp, testing, updateUser, findByRole } = require('../controllers/user');

router.post('/test', testing);
router.post('/signin', signIn);
router.post('/signup', signUp);
router.post('/requestPasswordReset', requestPasswordReset);
router.put('/resetPassword', resetPassword);
router.post('/studentSignIn', signInAsStudent);
router.put('/update', updateUser);
router.get('/findById', findById);
router.get('/findByRole', findByRole);
router.get('/findByRegistrationNumber', findByRegistrationNumber);
router.get('/list', getUsers);

module.exports = router;