const goalsTestData = [{
  id: 1, person_id: 1, game_id: 1, team_id: 154, minute: 11, offset: 0, score1: 0, score2: 1, penalty: 'f', owngoal: 't', created_at: '2014-11-28 11:46:29.369475', updated_at: '2014-11-28 11:46:29.369475',
}, {
  id: 2, person_id: 2, game_id: 1, team_id: 211, minute: 29, offset: 0, score1: 1, score2: 1, penalty: 'f', owngoal: 'f', created_at: '2014-11-28 11:46:29.376662', updated_at: '2014-11-28 11:46:29.376662',
}, {
  id: 3, person_id: 2, game_id: 1, team_id: 211, minute: 71, offset: 0, score1: 2, score2: 1, penalty: 't', owngoal: 'f', created_at: '2014-11-28 11:46:29.380168', updated_at: '2014-11-28 11:46:29.380168',
}, {
  id: 4, person_id: 3, game_id: 1, team_id: 211, minute: 90, offset: 1, score1: 3, score2: 1, penalty: 'f', owngoal: 'f', created_at: '2014-11-28 11:46:29.406505', updated_at: '2014-11-28 11:46:29.406505',
}, {
  id: 5, person_id: 4, game_id: 2, team_id: 190, minute: 61, offset: 0, score1: 1, score2: 0, penalty: 'f', owngoal: 'f', created_at: '2014-11-28 11:46:29.422396', updated_at: '2014-11-28 11:46:29.422396',
}, {
  id: 6, person_id: 5, game_id: 4, team_id: 154, minute: 11, offset: 0, score1: 0, score2: 1, penalty: 'f', owngoal: 'f', created_at: '2014-11-28 11:46:29.470434', updated_at: '2014-11-28 11:46:29.470434',
}, {
  id: 7, person_id: 6, game_id: 4, team_id: 154, minute: 48, offset: 0, score1: 0, score2: 2, penalty: 'f', owngoal: 'f', created_at: '2014-11-28 11:46:29.474294', updated_at: '2014-11-28 11:46:29.474294',
}, {
  id: 8, person_id: 7, game_id: 4, team_id: 154, minute: 61, offset: 0, score1: 0, score2: 3, penalty: 'f', owngoal: 'f', created_at: '2014-11-28 11:46:29.478408', updated_at: '2014-11-28 11:46:29.478408',
}, {
  id: 9, person_id: 7, game_id: 4, team_id: 154, minute: 73, offset: 0, score1: 0, score2: 4, penalty: 'f', owngoal: 'f', created_at: '2014-11-28 11:46:29.480500', updated_at: '2014-11-28 11:46:29.480500',
}, {
  id: 10, person_id: 2, game_id: 5, team_id: 211, minute: 17, offset: 0, score1: 0, score2: 1, penalty: 'f', owngoal: 'f', created_at: '2014-11-28 11:46:29.493841', updated_at: '2014-11-28 11:46:29.493841',
}, {
  id: 11, person_id: 8, game_id: 5, team_id: 22, minute: 26, offset: 0, score1: 1, score2: 1, penalty: 'f', owngoal: 'f', created_at: '2014-11-28 11:46:29.506174', updated_at: '2014-11-28 11:46:29.506174',
}, {
  id: 12, person_id: 2, game_id: 5, team_id: 211, minute: 35, offset: 0, score1: 1, score2: 2, penalty: 'f', owngoal: 'f', created_at: '2014-11-28 11:46:29.508704', updated_at: '2014-11-28 11:46:29.508704',
}, {
  id: 13, person_id: 9, game_id: 5, team_id: 211, minute: 49, offset: 0, score1: 1, score2: 3, penalty: 'f', owngoal: 'f', created_at: '2014-11-28 11:46:29.513221', updated_at: '2014-11-28 11:46:29.513221',
}, {
  id: 14, person_id: 10, game_id: 5, team_id: 211, minute: 84, offset: 0, score1: 1, score2: 4, penalty: 'f', owngoal: 'f', created_at: '2014-11-28 11:46:29.517289', updated_at: '2014-11-28 11:46:29.517289',
}, {
  id: 15, person_id: 11, game_id: 6, team_id: 190, minute: 72, offset: 0, score1: 0, score2: 1, penalty: 'f', owngoal: 'f', created_at: '2014-11-28 11:46:29.530358', updated_at: '2014-11-28 11:46:29.530358',
}, {
  id: 16, person_id: 12, game_id: 6, team_id: 190, minute: 75, offset: 0, score1: 0, score2: 2, penalty: 'f', owngoal: 'f', created_at: '2014-11-28 11:46:29.534178', updated_at: '2014-11-28 11:46:29.534178',
}, {
  id: 17, person_id: 13, game_id: 6, team_id: 190, minute: 82, offset: 0, score1: 0, score2: 3, penalty: 'f', owngoal: 'f', created_at: '2014-11-28 11:46:29.538209', updated_at: '2014-11-28 11:46:29.538209',
}, {
  id: 18, person_id: 6, game_id: 6, team_id: 154, minute: 87, offset: 0, score1: 1, score2: 3, penalty: 'f', owngoal: 'f', created_at: '2014-11-28 11:46:29.540361', updated_at: '2014-11-28 11:46:29.540361',
}, {
  id: 19, person_id: 14, game_id: 7, team_id: 129, minute: 27, offset: 0, score1: 1, score2: 0, penalty: 't', owngoal: 'f', created_at: '2014-11-28 11:46:29.576044', updated_at: '2014-11-28 11:46:29.576044',
}, {
  id: 20, person_id: 15, game_id: 7, team_id: 137, minute: 44, offset: 0, score1: 1, score2: 1, penalty: 'f', owngoal: 'f', created_at: '2014-11-28 11:46:29.581675', updated_at: '2014-11-28 11:46:29.581675',
}, {
  id: 21, person_id: 16, game_id: 7, team_id: 137, minute: 53, offset: 0, score1: 1, score2: 2, penalty: 'f', owngoal: 'f', created_at: '2014-11-28 11:46:29.586106', updated_at: '2014-11-28 11:46:29.586106',
}, {
  id: 22, person_id: 17, game_id: 7, team_id: 137, minute: 65, offset: 0, score1: 1, score2: 3, penalty: 'f', owngoal: 'f', created_at: '2014-11-28 11:46:29.590422', updated_at: '2014-11-28 11:46:29.590422',
}, {
  id: 23, person_id: 15, game_id: 7, team_id: 137, minute: 72, offset: 0, score1: 1, score2: 4, penalty: 'f', owngoal: 'f', created_at: '2014-11-28 11:46:29.592456', updated_at: '2014-11-28 11:46:29.592456',
}, {
  id: 24, person_id: 16, game_id: 7, team_id: 137, minute: 80, offset: 0, score1: 1, score2: 5, penalty: 'f', owngoal: 'f', created_at: '2014-11-28 11:46:29.594487', updated_at: '2014-11-28 11:46:29.594487',
}, {
  id: 25, person_id: 18, game_id: 8, team_id: 212, minute: 12, offset: 0, score1: 1, score2: 0, penalty: 'f', owngoal: 'f', created_at: '2014-11-28 11:46:29.628562', updated_at: '2014-11-28 11:46:29.628562',
}, {
  id: 26, person_id: 19, game_id: 8, team_id: 212, minute: 14, offset: 0, score1: 2, score2: 0, penalty: 'f', owngoal: 'f', created_at: '2014-11-28 11:46:29.634917', updated_at: '2014-11-28 11:46:29.634917',
}, {
  id: 27, person_id: 20, game_id: 8, team_id: 193, minute: 35, offset: 0, score1: 2, score2: 1, penalty: 'f', owngoal: 'f', created_at: '2014-11-28 11:46:29.640816', updated_at: '2014-11-28 11:46:29.640816',
}, {
  id: 28, person_id: 21, game_id: 8, team_id: 212, minute: 90, offset: 2, score1: 3, score2: 1, penalty: 'f', owngoal: 'f', created_at: '2014-11-28 11:46:29.645866', updated_at: '2014-11-28 11:46:29.645866',
}, {
  id: 29, person_id: 22, game_id: 9, team_id: 212, minute: 20, offset: 0, score1: 0, score2: 1, penalty: 'f', owngoal: 'f', created_at: '2014-11-28 11:46:29.664011', updated_at: '2014-11-28 11:46:29.664011',
}, {
  id: 30, person_id: 23, game_id: 9, team_id: 212, minute: 43, offset: 0, score1: 0, score2: 2, penalty: 'f', owngoal: 'f', created_at: '2014-11-28 11:46:29.669081', updated_at: '2014-11-28 11:46:29.669081',
}, {
  id: 31, person_id: 16, game_id: 10, team_id: 137, minute: 20, offset: 0, score1: 0, score2: 1, penalty: 'f', owngoal: 'f', created_at: '2014-11-28 11:46:29.684628', updated_at: '2014-11-28 11:46:29.684628',
}, {
  id: 32, person_id: 24, game_id: 10, team_id: 193, minute: 21, offset: 0, score1: 1, score2: 1, penalty: 'f', owngoal: 'f', created_at: '2014-11-28 11:46:29.689637', updated_at: '2014-11-28 11:46:29.689637',
}, {
  id: 33, person_id: 25, game_id: 10, team_id: 193, minute: 54, offset: 0, score1: 2, score2: 1, penalty: 't', owngoal: 'f', created_at: '2014-11-28 11:46:29.694906', updated_at: '2014-11-28 11:46:29.694906',
}, {
  id: 34, person_id: 15, game_id: 10, team_id: 137, minute: 58, offset: 0, score1: 2, score2: 2, penalty: 'f', owngoal: 'f', created_at: '2014-11-28 11:46:29.697114', updated_at: '2014-11-28 11:46:29.697114',
}, {
  id: 35, person_id: 26, game_id: 10, team_id: 137, minute: 68, offset: 0, score1: 2, score2: 3, penalty: 'f', owngoal: 'f', created_at: '2014-11-28 11:46:29.701599', updated_at: '2014-11-28 11:46:29.701599',
}, {
  id: 36, person_id: 27, game_id: 11, team_id: 129, minute: 36, offset: 0, score1: 0, score2: 1, penalty: 'f', owngoal: 'f', created_at: '2014-11-28 11:46:29.720703', updated_at: '2014-11-28 11:46:29.720703',
}, {
  id: 37, person_id: 28, game_id: 11, team_id: 129, minute: 69, offset: 0, score1: 0, score2: 2, penalty: 'f', owngoal: 'f', created_at: '2014-11-28 11:46:29.726287', updated_at: '2014-11-28 11:46:29.726287',
}, {
  id: 38, person_id: 29, game_id: 11, team_id: 129, minute: 82, offset: 0, score1: 0, score2: 3, penalty: 'f', owngoal: 'f', created_at: '2014-11-28 11:46:29.732731', updated_at: '2014-11-28 11:46:29.732731',
}, {
  id: 39, person_id: 30, game_id: 12, team_id: 137, minute: 77, offset: 0, score1: 1, score2: 0, penalty: 'f', owngoal: 'f', created_at: '2014-11-28 11:46:29.748004', updated_at: '2014-11-28 11:46:29.748004',
}, {
  id: 40, person_id: 26, game_id: 12, team_id: 137, minute: 90, offset: 2, score1: 2, score2: 0, penalty: 'f', owngoal: 'f', created_at: '2014-11-28 11:46:29.750589', updated_at: '2014-11-28 11:46:29.750589',
}, {
  id: 41, person_id: 31, game_id: 13, team_id: 215, minute: 5, offset: 0, score1: 1, score2: 0, penalty: 'f', owngoal: 'f', created_at: '2014-11-28 11:46:29.787938', updated_at: '2014-11-28 11:46:29.787938',
}, {
  id: 42, person_id: 32, game_id: 13, team_id: 215, minute: 58, offset: 0, score1: 2, score2: 0, penalty: 'f', owngoal: 'f', created_at: '2014-11-28 11:46:29.794547', updated_at: '2014-11-28 11:46:29.794547',
}, {
  id: 43, person_id: 33, game_id: 13, team_id: 215, minute: 90, offset: 3, score1: 3, score2: 0, penalty: 'f', owngoal: 'f', created_at: '2014-11-28 11:46:29.801226', updated_at: '2014-11-28 11:46:29.801226',
}, {
  id: 44, person_id: 34, game_id: 14, team_id: 72, minute: 16, offset: 0, score1: 0, score2: 1, penalty: 'f', owngoal: 'f', created_at: '2014-11-28 11:46:29.822727', updated_at: '2014-11-28 11:46:29.822727',
}, {
  id: 45, person_id: 35, game_id: 14, team_id: 17, minute: 64, offset: 0, score1: 1, score2: 1, penalty: 'f', owngoal: 'f', created_at: '2014-11-28 11:46:29.827045', updated_at: '2014-11-28 11:46:29.827045',
}, {
  id: 46, person_id: 36, game_id: 14, team_id: 17, minute: 66, offset: 0, score1: 2, score2: 1, penalty: 'f', owngoal: 'f', created_at: '2014-11-28 11:46:29.832267', updated_at: '2014-11-28 11:46:29.832267',
}, {
  id: 47, person_id: 33, game_id: 15, team_id: 215, minute: 64, offset: 0, score1: 1, score2: 0, penalty: 'f', owngoal: 'f', created_at: '2014-11-28 11:46:29.846946', updated_at: '2014-11-28 11:46:29.846946',
}, {
  id: 48, person_id: 37, game_id: 15, team_id: 215, minute: 70, offset: 0, score1: 2, score2: 0, penalty: 'f', owngoal: 'f', created_at: '2014-11-28 11:46:29.851775', updated_at: '2014-11-28 11:46:29.851775',
}, {
  id: 49, person_id: 36, game_id: 15, team_id: 17, minute: 73, offset: 0, score1: 2, score2: 1, penalty: 'f', owngoal: 'f', created_at: '2014-11-28 11:46:29.854102', updated_at: '2014-11-28 11:46:29.854102',
}, {
  id: 50, person_id: 38, game_id: 17, team_id: 215, minute: 17, offset: 0, score1: 0, score2: 1, penalty: 't', owngoal: 'f', created_at: '2014-11-28 11:46:29.882143', updated_at: '2014-11-28 11:46:29.882143',
}, {
  id: 51, person_id: 39, game_id: 17, team_id: 72, minute: 45, offset: 1, score1: 1, score2: 1, penalty: 'f', owngoal: 'f', created_at: '2014-11-28 11:46:29.888098', updated_at: '2014-11-28 11:46:29.888098',
}, {
  id: 52, person_id: 40, game_id: 17, team_id: 215, minute: 55, offset: 0, score1: 1, score2: 2, penalty: 'f', owngoal: 'f', created_at: '2014-11-28 11:46:29.893030', updated_at: '2014-11-28 11:46:29.893030',
}, {
  id: 53, person_id: 40, game_id: 17, team_id: 215, minute: 82, offset: 0, score1: 1, score2: 3, penalty: 'f', owngoal: 'f', created_at: '2014-11-28 11:46:29.895777', updated_at: '2014-11-28 11:46:29.895777',
}, {
  id: 54, person_id: 33, game_id: 17, team_id: 215, minute: 90, offset: 0, score1: 1, score2: 4, penalty: 'f', owngoal: 'f', created_at: '2014-11-28 11:46:29.898061', updated_at: '2014-11-28 11:46:29.898061',
}, {
  id: 55, person_id: 41, game_id: 18, team_id: 132, minute: 42, offset: 0, score1: 1, score2: 0, penalty: 'f', owngoal: 'f', created_at: '2014-11-28 11:46:29.924426', updated_at: '2014-11-28 11:46:29.924426',
}, {
  id: 56, person_id: 35, game_id: 18, team_id: 17, minute: 74, offset: 0, score1: 1, score2: 1, penalty: 'f', owngoal: 'f', created_at: '2014-11-28 11:46:29.926758', updated_at: '2014-11-28 11:46:29.926758',
}, {
  id: 57, person_id: 42, game_id: 18, team_id: 132, minute: 90, offset: 3, score1: 2, score2: 1, penalty: 't', owngoal: 'f', created_at: '2014-11-28 11:46:29.931323', updated_at: '2014-11-28 11:46:29.931323',
}, {
  id: 58, person_id: 43, game_id: 19, team_id: 214, minute: 24, offset: 0, score1: 1, score2: 0, penalty: 't', owngoal: 'f', created_at: '2014-11-28 11:46:29.973403', updated_at: '2014-11-28 11:46:29.973403',
}, {
  id: 59, person_id: 44, game_id: 19, team_id: 118, minute: 54, offset: 0, score1: 1, score2: 1, penalty: 'f', owngoal: 'f', created_at: '2014-11-28 11:46:29.978161', updated_at: '2014-11-28 11:46:29.978161',
}, {
  id: 60, person_id: 45, game_id: 19, team_id: 118, minute: 57, offset: 0, score1: 1, score2: 2, penalty: 'f', owngoal: 'f', created_at: '2014-11-28 11:46:29.984774', updated_at: '2014-11-28 11:46:29.984774',
}, {
  id: 61, person_id: 46, game_id: 19, team_id: 118, minute: 84, offset: 0, score1: 1, score2: 3, penalty: 'f', owngoal: 'f', created_at: '2014-11-28 11:46:29.990005', updated_at: '2014-11-28 11:46:29.990005',
}, {
  id: 62, person_id: 47, game_id: 20, team_id: 134, minute: 35, offset: 0, score1: 0, score2: 1, penalty: 'f', owngoal: 'f', created_at: '2014-11-28 11:46:30.024075', updated_at: '2014-11-28 11:46:30.024075',
}, {
  id: 63, person_id: 48, game_id: 20, team_id: 170, minute: 37, offset: 0, score1: 1, score2: 1, penalty: 'f', owngoal: 'f', created_at: '2014-11-28 11:46:30.031197', updated_at: '2014-11-28 11:46:30.031197',
}, {
  id: 64, person_id: 49, game_id: 20, team_id: 134, minute: 50, offset: 0, score1: 1, score2: 2, penalty: 'f', owngoal: 'f', created_at: '2014-11-28 11:46:30.036533', updated_at: '2014-11-28 11:46:30.036533',
}, {
  id: 65, person_id: 50, game_id: 21, team_id: 214, minute: 39, offset: 0, score1: 1, score2: 0, penalty: 'f', owngoal: 'f', created_at: '2014-11-28 11:46:30.052231', updated_at: '2014-11-28 11:46:30.052231',
}, {
  id: 66, person_id: 51, game_id: 21, team_id: 170, minute: 75, offset: 0, score1: 1, score2: 1, penalty: 'f', owngoal: 'f', created_at: '2014-11-28 11:46:30.057014', updated_at: '2014-11-28 11:46:30.057014',
}, {
  id: 67, person_id: 50, game_id: 21, team_id: 214, minute: 85, offset: 0, score1: 2, score2: 1, penalty: 'f', owngoal: 'f', created_at: '2014-11-28 11:46:30.059703', updated_at: '2014-11-28 11:46:30.059703',
}, {
  id: 68, person_id: 52, game_id: 22, team_id: 118, minute: 44, offset: 0, score1: 0, score2: 1, penalty: 'f', owngoal: 'f', created_at: '2014-11-28 11:46:30.075984', updated_at: '2014-11-28 11:46:30.075984',
}, {
  id: 69, person_id: 53, game_id: 23, team_id: 214, minute: 81, offset: 0, score1: 0, score2: 1, penalty: 'f', owngoal: 'f', created_at: '2014-11-28 11:46:30.090728', updated_at: '2014-11-28 11:46:30.090728',
}, {
  id: 70, person_id: 54, game_id: 25, team_id: 216, minute: 22, offset: 0, score1: 0, score2: 1, penalty: 'f', owngoal: 'f', created_at: '2014-11-28 11:46:30.140026', updated_at: '2014-11-28 11:46:30.140026',
}, {
  id: 71, person_id: 55, game_id: 25, team_id: 153, minute: 48, offset: 0, score1: 1, score2: 1, penalty: 'f', owngoal: 'f', created_at: '2014-11-28 11:46:30.145116', updated_at: '2014-11-28 11:46:30.145116',
}, {
  id: 72, person_id: 56, game_id: 25, team_id: 153, minute: 90, offset: 3, score1: 2, score2: 1, penalty: 'f', owngoal: 'f', created_at: '2014-11-28 11:46:30.149942', updated_at: '2014-11-28 11:46:30.149942',
}, {
  id: 73, person_id: 57, game_id: 26, team_id: 131, minute: 45, offset: 0, score1: 1, score2: 0, penalty: 't', owngoal: 'f', created_at: '2014-11-28 11:46:30.171379', updated_at: '2014-11-28 11:46:30.171379',
}, {
  id: 74, person_id: 58, game_id: 26, team_id: 131, minute: 48, offset: 0, score1: 2, score2: 0, penalty: 'f', owngoal: 't', created_at: '2014-11-28 11:46:30.177341', updated_at: '2014-11-28 11:46:30.177341',
}, {
  id: 75, person_id: 57, game_id: 26, team_id: 131, minute: 72, offset: 0, score1: 3, score2: 0, penalty: 'f', owngoal: 'f', created_at: '2014-11-28 11:46:30.180106', updated_at: '2014-11-28 11:46:30.180106',
}, {
  id: 76, person_id: 59, game_id: 27, team_id: 131, minute: 17, offset: 0, score1: 0, score2: 1, penalty: 'f', owngoal: 'f', created_at: '2014-11-28 11:46:30.198570', updated_at: '2014-11-28 11:46:30.198570',
}, {
  id: 77, person_id: 60, game_id: 27, team_id: 131, minute: 18, offset: 0, score1: 0, score2: 2, penalty: 'f', owngoal: 'f', created_at: '2014-11-28 11:46:30.203946', updated_at: '2014-11-28 11:46:30.203946',
}, {
  id: 78, person_id: 61, game_id: 27, team_id: 131, minute: 40, offset: 0, score1: 0, score2: 3, penalty: 'f', owngoal: 'f', created_at: '2014-11-28 11:46:30.208548', updated_at: '2014-11-28 11:46:30.208548',
}, {
  id: 79, person_id: 57, game_id: 27, team_id: 131, minute: 67, offset: 0, score1: 0, score2: 4, penalty: 'f', owngoal: 'f', created_at: '2014-11-28 11:46:30.210408', updated_at: '2014-11-28 11:46:30.210408',
}, {
  id: 80, person_id: 62, game_id: 27, team_id: 131, minute: 73, offset: 0, score1: 0, score2: 5, penalty: 'f', owngoal: 'f', created_at: '2014-11-28 11:46:30.215558', updated_at: '2014-11-28 11:46:30.215558',
}, {
  id: 81, person_id: 63, game_id: 27, team_id: 153, minute: 81, offset: 0, score1: 1, score2: 5, penalty: 'f', owngoal: 'f', created_at: '2014-11-28 11:46:30.220395', updated_at: '2014-11-28 11:46:30.220395',
}, {
  id: 82, person_id: 64, game_id: 27, team_id: 153, minute: 87, offset: 0, score1: 2, score2: 5, penalty: 'f', owngoal: 'f', created_at: '2014-11-28 11:46:30.225248', updated_at: '2014-11-28 11:46:30.225248',
}, {
  id: 83, person_id: 65, game_id: 28, team_id: 117, minute: 31, offset: 0, score1: 1, score2: 0, penalty: 'f', owngoal: 'f', created_at: '2014-11-28 11:46:30.240732', updated_at: '2014-11-28 11:46:30.240732',
}, {
  id: 84, person_id: 54, game_id: 28, team_id: 216, minute: 34, offset: 0, score1: 1, score2: 1, penalty: 'f', owngoal: 'f', created_at: '2014-11-28 11:46:30.243559', updated_at: '2014-11-28 11:46:30.243559',
}, {
  id: 85, person_id: 54, game_id: 28, team_id: 216, minute: 65, offset: 0, score1: 1, score2: 2, penalty: 'f', owngoal: 'f', created_at: '2014-11-28 11:46:30.246230', updated_at: '2014-11-28 11:46:30.246230',
}, {
  id: 86, person_id: 66, game_id: 29, team_id: 153, minute: 6, offset: 0, score1: 0, score2: 1, penalty: 'f', owngoal: 'f', created_at: '2014-11-28 11:46:30.274411', updated_at: '2014-11-28 11:46:30.274411',
}, {
  id: 87, person_id: 66, game_id: 29, team_id: 153, minute: 31, offset: 0, score1: 0, score2: 2, penalty: 'f', owngoal: 'f', created_at: '2014-11-28 11:46:30.276489', updated_at: '2014-11-28 11:46:30.276489',
}, {
  id: 88, person_id: 66, game_id: 29, team_id: 153, minute: 71, offset: 0, score1: 0, score2: 3, penalty: 'f', owngoal: 'f', created_at: '2014-11-28 11:46:30.278553', updated_at: '2014-11-28 11:46:30.278553',
}, {
  id: 89, person_id: 67, game_id: 31, team_id: 210, minute: 3, offset: 0, score1: 1, score2: 0, penalty: 'f', owngoal: 't', created_at: '2014-11-28 11:46:30.320772', updated_at: '2014-11-28 11:46:30.320772',
}, {
  id: 90, person_id: 68, game_id: 31, team_id: 210, minute: 65, offset: 0, score1: 2, score2: 0, penalty: 'f', owngoal: 'f', created_at: '2014-11-28 11:46:30.325900', updated_at: '2014-11-28 11:46:30.325900',
}, {
  id: 91, person_id: 69, game_id: 31, team_id: 162, minute: 85, offset: 0, score1: 2, score2: 1, penalty: 'f', owngoal: 'f', created_at: '2014-11-28 11:46:30.330515', updated_at: '2014-11-28 11:46:30.330515',
}, {
  id: 92, person_id: 68, game_id: 33, team_id: 210, minute: 90, offset: 0, score1: 1, score2: 0, penalty: 'f', owngoal: 'f', created_at: '2014-11-28 11:46:30.349556', updated_at: '2014-11-28 11:46:30.349556',
}, {
  id: 93, person_id: 70, game_id: 34, team_id: 20, minute: 29, offset: 0, score1: 1, score2: 0, penalty: 'f', owngoal: 'f', created_at: '2014-11-28 11:46:30.374593', updated_at: '2014-11-28 11:46:30.374593',
}, {
  id: 94, person_id: 68, game_id: 35, team_id: 210, minute: 3, offset: 0, score1: 0, score2: 1, penalty: 'f', owngoal: 'f', created_at: '2014-11-28 11:46:30.389875', updated_at: '2014-11-28 11:46:30.389875',
}, {
  id: 95, person_id: 71, game_id: 35, team_id: 20, minute: 4, offset: 0, score1: 1, score2: 1, penalty: 'f', owngoal: 'f', created_at: '2014-11-28 11:46:30.396698', updated_at: '2014-11-28 11:46:30.396698',
}, {
  id: 96, person_id: 68, game_id: 35, team_id: 210, minute: 45, offset: 1, score1: 1, score2: 2, penalty: 'f', owngoal: 'f', created_at: '2014-11-28 11:46:30.399301', updated_at: '2014-11-28 11:46:30.399301',
}, {
  id: 97, person_id: 71, game_id: 35, team_id: 20, minute: 47, offset: 0, score1: 2, score2: 2, penalty: 'f', owngoal: 'f', created_at: '2014-11-28 11:46:30.402285', updated_at: '2014-11-28 11:46:30.402285',
}, {
  id: 98, person_id: 72, game_id: 35, team_id: 210, minute: 50, offset: 0, score1: 2, score2: 3, penalty: 'f', owngoal: 'f', created_at: '2014-11-28 11:46:30.409353', updated_at: '2014-11-28 11:46:30.409353',
}, {
  id: 99, person_id: 73, game_id: 36, team_id: 162, minute: 23, offset: 0, score1: 1, score2: 0, penalty: 'f', owngoal: 'f', created_at: '2014-11-28 11:46:30.428714', updated_at: '2014-11-28 11:46:30.428714',
}, {
  id: 100, person_id: 74, game_id: 36, team_id: 162, minute: 59, offset: 0, score1: 2, score2: 0, penalty: 'f', owngoal: 'f', created_at: '2014-11-28 11:46:30.433718', updated_at: '2014-11-28 11:46:30.433718',
}, {
  id: 101, person_id: 75, game_id: 36, team_id: 178, minute: 82, offset: 0, score1: 2, score2: 1, penalty: 'f', owngoal: 'f', created_at: '2014-11-28 11:46:30.438570', updated_at: '2014-11-28 11:46:30.438570',
}, {
  id: 102, person_id: 76, game_id: 36, team_id: 162, minute: 83, offset: 0, score1: 3, score2: 1, penalty: 'f', owngoal: 'f', created_at: '2014-11-28 11:46:30.444272', updated_at: '2014-11-28 11:46:30.444272',
}, {
  id: 103, person_id: 77, game_id: 37, team_id: 127, minute: 12, offset: 0, score1: 1, score2: 0, penalty: 't', owngoal: 'f', created_at: '2014-11-28 11:46:30.485201', updated_at: '2014-11-28 11:46:30.485201',
}, {
  id: 104, person_id: 78, game_id: 37, team_id: 127, minute: 32, offset: 0, score1: 2, score2: 0, penalty: 'f', owngoal: 'f', created_at: '2014-11-28 11:46:30.490521', updated_at: '2014-11-28 11:46:30.490521',
}, {
  id: 105, person_id: 77, game_id: 37, team_id: 127, minute: 45, offset: 1, score1: 3, score2: 0, penalty: 'f', owngoal: 'f', created_at: '2014-11-28 11:46:30.493284', updated_at: '2014-11-28 11:46:30.493284',
}, {
  id: 106, person_id: 77, game_id: 37, team_id: 127, minute: 78, offset: 0, score1: 4, score2: 0, penalty: 'f', owngoal: 'f', created_at: '2014-11-28 11:46:30.495669', updated_at: '2014-11-28 11:46:30.495669',
}, {
  id: 107, person_id: 79, game_id: 38, team_id: 191, minute: 1, offset: 0, score1: 0, score2: 1, penalty: 'f', owngoal: 'f', created_at: '2014-11-28 11:46:30.521854', updated_at: '2014-11-28 11:46:30.521854',
}, {
  id: 108, person_id: 80, game_id: 38, team_id: 18, minute: 82, offset: 0, score1: 1, score2: 1, penalty: 'f', owngoal: 'f', created_at: '2014-11-28 11:46:30.526438', updated_at: '2014-11-28 11:46:30.526438',
}, {
  id: 109, person_id: 81, game_id: 38, team_id: 191, minute: 86, offset: 0, score1: 1, score2: 2, penalty: 'f', owngoal: 'f', created_at: '2014-11-28 11:46:30.531298', updated_at: '2014-11-28 11:46:30.531298',
}, {
  id: 110, person_id: 82, game_id: 39, team_id: 127, minute: 51, offset: 0, score1: 1, score2: 0, penalty: 'f', owngoal: 'f', created_at: '2014-11-28 11:46:30.548387', updated_at: '2014-11-28 11:46:30.548387',
}, {
  id: 111, person_id: 80, game_id: 39, team_id: 18, minute: 54, offset: 0, score1: 1, score2: 1, penalty: 'f', owngoal: 'f', created_at: '2014-11-28 11:46:30.550784', updated_at: '2014-11-28 11:46:30.550784',
}, {
  id: 112, person_id: 83, game_id: 39, team_id: 18, minute: 63, offset: 0, score1: 1, score2: 2, penalty: 'f', owngoal: 'f', created_at: '2014-11-28 11:46:30.555992', updated_at: '2014-11-28 11:46:30.555992',
}, {
  id: 113, person_id: 84, game_id: 39, team_id: 127, minute: 71, offset: 0, score1: 2, score2: 2, penalty: 'f', owngoal: 'f', created_at: '2014-11-28 11:46:30.561220', updated_at: '2014-11-28 11:46:30.561220',
}, {
  id: 114, person_id: 85, game_id: 40, team_id: 138, minute: 5, offset: 0, score1: 0, score2: 1, penalty: 'f', owngoal: 'f', created_at: '2014-11-28 11:46:30.579270', updated_at: '2014-11-28 11:46:30.579270',
}, {
  id: 115, person_id: 86, game_id: 40, team_id: 191, minute: 64, offset: 0, score1: 1, score2: 1, penalty: 'f', owngoal: 'f', created_at: '2014-11-28 11:46:30.584371', updated_at: '2014-11-28 11:46:30.584371',
}, {
  id: 116, person_id: 79, game_id: 40, team_id: 191, minute: 81, offset: 0, score1: 2, score2: 1, penalty: 'f', owngoal: 'f', created_at: '2014-11-28 11:46:30.587041', updated_at: '2014-11-28 11:46:30.587041',
}, {
  id: 117, person_id: 87, game_id: 40, team_id: 138, minute: 90, offset: 5, score1: 2, score2: 2, penalty: 'f', owngoal: 'f', created_at: '2014-11-28 11:46:30.592313', updated_at: '2014-11-28 11:46:30.592313',
}, {
  id: 118, person_id: 77, game_id: 41, team_id: 127, minute: 55, offset: 0, score1: 0, score2: 1, penalty: 'f', owngoal: 'f', created_at: '2014-11-28 11:46:30.605308', updated_at: '2014-11-28 11:46:30.605308',
}, {
  id: 119, person_id: 88, game_id: 42, team_id: 138, minute: 31, offset: 0, score1: 1, score2: 0, penalty: 'f', owngoal: 't', created_at: '2014-11-28 11:46:30.644364', updated_at: '2014-11-28 11:46:30.644364',
}, {
  id: 120, person_id: 83, game_id: 42, team_id: 18, minute: 57, offset: 0, score1: 1, score2: 1, penalty: 'f', owngoal: 'f', created_at: '2014-11-28 11:46:30.646759', updated_at: '2014-11-28 11:46:30.646759',
}, {
  id: 121, person_id: 89, game_id: 42, team_id: 138, minute: 80, offset: 0, score1: 2, score2: 1, penalty: 'f', owngoal: 'f', created_at: '2014-11-28 11:46:30.651665', updated_at: '2014-11-28 11:46:30.651665',
}, {
  id: 122, person_id: 90, game_id: 43, team_id: 1, minute: 25, offset: 0, score1: 0, score2: 1, penalty: 't', owngoal: 'f', created_at: '2014-11-28 11:46:30.673538', updated_at: '2014-11-28 11:46:30.673538',
}, {
  id: 123, person_id: 91, game_id: 43, team_id: 125, minute: 70, offset: 0, score1: 1, score2: 1, penalty: 'f', owngoal: 'f', created_at: '2014-11-28 11:46:30.680182', updated_at: '2014-11-28 11:46:30.680182',
}, {
  id: 124, person_id: 92, game_id: 43, team_id: 125, minute: 80, offset: 0, score1: 2, score2: 1, penalty: 'f', owngoal: 'f', created_at: '2014-11-28 11:46:30.686117', updated_at: '2014-11-28 11:46:30.686117',
}, {
  id: 125, person_id: 93, game_id: 44, team_id: 74, minute: 68, offset: 0, score1: 0, score2: 1, penalty: 'f', owngoal: 'f', created_at: '2014-11-28 11:46:30.706288', updated_at: '2014-11-28 11:46:30.706288',
}, {
  id: 126, person_id: 94, game_id: 44, team_id: 156, minute: 74, offset: 0, score1: 1, score2: 1, penalty: 'f', owngoal: 'f', created_at: '2014-11-28 11:46:30.720659', updated_at: '2014-11-28 11:46:30.720659',
}, {
  id: 127, person_id: 95, game_id: 45, team_id: 125, minute: 88, offset: 0, score1: 1, score2: 0, penalty: 'f', owngoal: 'f', created_at: '2014-11-28 11:46:30.735900', updated_at: '2014-11-28 11:46:30.735900',
}, {
  id: 128, person_id: 96, game_id: 46, team_id: 1, minute: 26, offset: 0, score1: 0, score2: 1, penalty: 'f', owngoal: 'f', created_at: '2014-11-28 11:46:30.753535', updated_at: '2014-11-28 11:46:30.753535',
}, {
  id: 129, person_id: 97, game_id: 46, team_id: 1, minute: 28, offset: 0, score1: 0, score2: 2, penalty: 'f', owngoal: 'f', created_at: '2014-11-28 11:46:30.758715', updated_at: '2014-11-28 11:46:30.758715',
}, {
  id: 130, person_id: 98, game_id: 46, team_id: 1, minute: 38, offset: 0, score1: 0, score2: 3, penalty: 'f', owngoal: 'f', created_at: '2014-11-28 11:46:30.763243', updated_at: '2014-11-28 11:46:30.763243',
}, {
  id: 131, person_id: 99, game_id: 46, team_id: 74, minute: 50, offset: 0, score1: 1, score2: 3, penalty: 'f', owngoal: 'f', created_at: '2014-11-28 11:46:30.768077', updated_at: '2014-11-28 11:46:30.768077',
}, {
  id: 132, person_id: 100, game_id: 46, team_id: 1, minute: 62, offset: 0, score1: 1, score2: 4, penalty: 'f', owngoal: 'f', created_at: '2014-11-28 11:46:30.771806', updated_at: '2014-11-28 11:46:30.771806',
}, {
  id: 133, person_id: 101, game_id: 46, team_id: 74, minute: 72, offset: 0, score1: 2, score2: 4, penalty: 'f', owngoal: 'f', created_at: '2014-11-28 11:46:30.776800', updated_at: '2014-11-28 11:46:30.776800',
}, {
  id: 134, person_id: 102, game_id: 47, team_id: 125, minute: 78, offset: 0, score1: 0, score2: 1, penalty: 'f', owngoal: 'f', created_at: '2014-11-28 11:46:30.811018', updated_at: '2014-11-28 11:46:30.811018',
}, {
  id: 135, person_id: 103, game_id: 48, team_id: 156, minute: 6, offset: 0, score1: 0, score2: 1, penalty: 'f', owngoal: 'f', created_at: '2014-11-28 11:46:30.826337', updated_at: '2014-11-28 11:46:30.826337',
}, {
  id: 136, person_id: 96, game_id: 48, team_id: 1, minute: 60, offset: 0, score1: 1, score2: 1, penalty: 'f', owngoal: 'f', created_at: '2014-11-28 11:46:30.828803', updated_at: '2014-11-28 11:46:30.828803',
}, {
  id: 137, person_id: 104, game_id: 49, team_id: 211, minute: 18, offset: 0, score1: 1, score2: 0, penalty: 'f', owngoal: 'f', created_at: '2014-11-28 11:46:30.853991', updated_at: '2014-11-28 11:46:30.853991',
}, {
  id: 138, person_id: 18, game_id: 49, team_id: 212, minute: 32, offset: 0, score1: 1, score2: 1, penalty: 'f', owngoal: 'f', created_at: '2014-11-28 11:46:30.867196', updated_at: '2014-11-28 11:46:30.867196',
}, {
  id: 139, person_id: 33, game_id: 50, team_id: 215, minute: 28, offset: 0, score1: 1, score2: 0, penalty: 'f', owngoal: 'f', created_at: '2014-11-28 11:46:30.880598', updated_at: '2014-11-28 11:46:30.880598',
}, {
  id: 140, person_id: 33, game_id: 50, team_id: 215, minute: 50, offset: 0, score1: 2, score2: 0, penalty: 'f', owngoal: 'f', created_at: '2014-11-28 11:46:30.882573', updated_at: '2014-11-28 11:46:30.882573',
}, {
  id: 141, person_id: 105, game_id: 51, team_id: 190, minute: 48, offset: 0, score1: 0, score2: 1, penalty: 'f', owngoal: 'f', created_at: '2014-11-28 11:46:30.897808', updated_at: '2014-11-28 11:46:30.897808',
}, {
  id: 142, person_id: 106, game_id: 51, team_id: 137, minute: 88, offset: 0, score1: 1, score2: 1, penalty: 'f', owngoal: 'f', created_at: '2014-11-28 11:46:30.902799', updated_at: '2014-11-28 11:46:30.902799',
}, {
  id: 143, person_id: 107, game_id: 51, team_id: 137, minute: 90, offset: 0, score1: 2, score2: 1, penalty: 'f', owngoal: 'f', created_at: '2014-11-28 11:46:30.907753', updated_at: '2014-11-28 11:46:30.907753',
}, {
  id: 144, person_id: 52, game_id: 52, team_id: 118, minute: 52, offset: 0, score1: 1, score2: 0, penalty: 'f', owngoal: 'f', created_at: '2014-11-28 11:46:30.919984', updated_at: '2014-11-28 11:46:30.919984',
}, {
  id: 145, person_id: 108, game_id: 52, team_id: 132, minute: 90, offset: 0, score1: 1, score2: 1, penalty: 'f', owngoal: 'f', created_at: '2014-11-28 11:46:30.924149', updated_at: '2014-11-28 11:46:30.924149',
}, {
  id: 146, person_id: 109, game_id: 53, team_id: 131, minute: 79, offset: 0, score1: 1, score2: 0, penalty: 'f', owngoal: 'f', created_at: '2014-11-28 11:46:30.967409', updated_at: '2014-11-28 11:46:30.967409',
}, {
  id: 147, person_id: 110, game_id: 53, team_id: 131, minute: 90, offset: 2, score1: 2, score2: 0, penalty: 'f', owngoal: 't', created_at: '2014-11-28 11:46:30.973699', updated_at: '2014-11-28 11:46:30.973699',
}, {
  id: 148, person_id: 111, game_id: 54, team_id: 127, minute: 92, offset: 0, score1: 1, score2: 0, penalty: 'f', owngoal: 'f', created_at: '2014-11-28 11:46:30.987772', updated_at: '2014-11-28 11:46:30.987772',
}, {
  id: 149, person_id: 112, game_id: 54, team_id: 127, minute: 120, offset: 0, score1: 2, score2: 0, penalty: 'f', owngoal: 'f', created_at: '2014-11-28 11:46:30.992007', updated_at: '2014-11-28 11:46:30.992007',
}, {
  id: 150, person_id: 98, game_id: 54, team_id: 1, minute: 121, offset: 0, score1: 2, score2: 1, penalty: 'f', owngoal: 'f', created_at: '2014-11-28 11:46:30.994150', updated_at: '2014-11-28 11:46:30.994150',
}, {
  id: 151, person_id: 113, game_id: 55, team_id: 210, minute: 118, offset: 0, score1: 1, score2: 0, penalty: 'f', owngoal: 'f', created_at: '2014-11-28 11:46:31.006566', updated_at: '2014-11-28 11:46:31.006566',
}, {
  id: 152, person_id: 114, game_id: 56, team_id: 125, minute: 93, offset: 0, score1: 1, score2: 0, penalty: 'f', owngoal: 'f', created_at: '2014-11-28 11:46:31.022887', updated_at: '2014-11-28 11:46:31.022887',
}, {
  id: 153, person_id: 115, game_id: 56, team_id: 125, minute: 105, offset: 0, score1: 2, score2: 0, penalty: 'f', owngoal: 'f', created_at: '2014-11-28 11:46:31.028659', updated_at: '2014-11-28 11:46:31.028659',
}, {
  id: 154, person_id: 116, game_id: 56, team_id: 191, minute: 107, offset: 0, score1: 2, score2: 1, penalty: 'f', owngoal: 'f', created_at: '2014-11-28 11:46:31.033821', updated_at: '2014-11-28 11:46:31.033821',
}, {
  id: 155, person_id: 117, game_id: 57, team_id: 211, minute: 7, offset: 0, score1: 1, score2: 0, penalty: 'f', owngoal: 'f', created_at: '2014-11-28 11:46:31.050215', updated_at: '2014-11-28 11:46:31.050215',
}, {
  id: 156, person_id: 104, game_id: 57, team_id: 211, minute: 69, offset: 0, score1: 2, score2: 0, penalty: 'f', owngoal: 'f', created_at: '2014-11-28 11:46:31.053092', updated_at: '2014-11-28 11:46:31.053092',
}, {
  id: 157, person_id: 33, game_id: 57, team_id: 215, minute: 80, offset: 0, score1: 2, score2: 1, penalty: 't', owngoal: 'f', created_at: '2014-11-28 11:46:31.056406', updated_at: '2014-11-28 11:46:31.056406',
}, {
  id: 158, person_id: 78, game_id: 58, team_id: 127, minute: 13, offset: 0, score1: 0, score2: 1, penalty: 'f', owngoal: 'f', created_at: '2014-11-28 11:46:31.067958', updated_at: '2014-11-28 11:46:31.067958',
}, {
  id: 159, person_id: 118, game_id: 60, team_id: 210, minute: 8, offset: 0, score1: 1, score2: 0, penalty: 'f', owngoal: 'f', created_at: '2014-11-28 11:46:31.104868', updated_at: '2014-11-28 11:46:31.104868',
}, {
  id: 160, person_id: 77, game_id: 61, team_id: 127, minute: 11, offset: 0, score1: 0, score2: 1, penalty: 'f', owngoal: 'f', created_at: '2014-11-28 11:46:31.122262', updated_at: '2014-11-28 11:46:31.122262',
}, {
  id: 161, person_id: 84, game_id: 61, team_id: 127, minute: 23, offset: 0, score1: 0, score2: 2, penalty: 'f', owngoal: 'f', created_at: '2014-11-28 11:46:31.125826', updated_at: '2014-11-28 11:46:31.125826',
}, {
  id: 162, person_id: 119, game_id: 61, team_id: 127, minute: 24, offset: 0, score1: 0, score2: 3, penalty: 'f', owngoal: 'f', created_at: '2014-11-28 11:46:31.132030', updated_at: '2014-11-28 11:46:31.132030',
}, {
  id: 163, person_id: 119, game_id: 61, team_id: 127, minute: 26, offset: 0, score1: 0, score2: 4, penalty: 'f', owngoal: 'f', created_at: '2014-11-28 11:46:31.134872', updated_at: '2014-11-28 11:46:31.134872',
}, {
  id: 164, person_id: 120, game_id: 61, team_id: 127, minute: 29, offset: 0, score1: 0, score2: 5, penalty: 'f', owngoal: 'f', created_at: '2014-11-28 11:46:31.140545', updated_at: '2014-11-28 11:46:31.140545',
}, {
  id: 165, person_id: 121, game_id: 61, team_id: 127, minute: 69, offset: 0, score1: 0, score2: 6, penalty: 'f', owngoal: 'f', created_at: '2014-11-28 11:46:31.145136', updated_at: '2014-11-28 11:46:31.145136',
}, {
  id: 166, person_id: 121, game_id: 61, team_id: 127, minute: 79, offset: 0, score1: 0, score2: 7, penalty: 'f', owngoal: 'f', created_at: '2014-11-28 11:46:31.147266', updated_at: '2014-11-28 11:46:31.147266',
}, {
  id: 167, person_id: 3, game_id: 61, team_id: 211, minute: 90, offset: 0, score1: 1, score2: 7, penalty: 'f', owngoal: 'f', created_at: '2014-11-28 11:46:31.149829', updated_at: '2014-11-28 11:46:31.149829',
}, {
  id: 168, person_id: 15, game_id: 63, team_id: 137, minute: 3, offset: 0, score1: 0, score2: 1, penalty: 't', owngoal: 'f', created_at: '2014-11-28 11:46:31.169164', updated_at: '2014-11-28 11:46:31.169164',
}, {
  id: 169, person_id: 122, game_id: 63, team_id: 137, minute: 17, offset: 0, score1: 0, score2: 2, penalty: 'f', owngoal: 'f', created_at: '2014-11-28 11:46:31.174171', updated_at: '2014-11-28 11:46:31.174171',
}, {
  id: 170, person_id: 123, game_id: 63, team_id: 137, minute: 90, offset: 1, score1: 0, score2: 3, penalty: 'f', owngoal: 'f', created_at: '2014-11-28 11:46:31.180007', updated_at: '2014-11-28 11:46:31.180007',
}, {
  id: 171, person_id: 82, game_id: 64, team_id: 127, minute: 113, offset: 0, score1: 1, score2: 0, penalty: 'f', owngoal: 'f', created_at: '2014-11-28 11:46:31.197171', updated_at: '2014-11-28 11:46:31.197171',
}];

export default goalsTestData;
