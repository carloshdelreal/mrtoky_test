const classifier = (data) => {
  const dict = {};
  data.forEach((element) => {
    if (dict[element.region] === undefined) {
      dict[element.region] = [element];
    } else {
      dict[element.region].push(element);
    }
  });
  return dict;
};

const countryByCode = (code, countriesList) => {
  countriesList.forEach((item) => {
    if (item.alpha3Code === code) {
      return item;
    }
  });
  return null;
};

const countryListByCode = (teams, countriesList) => {
  const countries = [];
  teams.forEach((team) => {
    const country = countryByCode(team.code, countriesList);
    if (!country) {
      countries.push(country);
    }
  });
  return countries;
};

const countriesToDict = (countriesList) => {
  const dict = {};
  countriesList.forEach((item) => {
    dict[item.name] = item;
  });
  return dict;
};

const teamsToDict = (countriesList) => {
  const dict = {};
  countriesList.forEach((item) => {
    dict[item.id] = item;
  });
  return dict;
};


const continentsDict = (teams, countriesDict) => {
  const contDict = {};
  teams.forEach((team) => {
    const country = countriesDict[team.code];
    if (contDict[country.region] === undefined) {
      contDict[country.region] = [country];
    } else {
      contDict[country.region].push(country);
    }
    return contDict;
  });
};

export {
  classifier, countryByCode, countryListByCode, countriesToDict, continentsDict, teamsToDict,
};
