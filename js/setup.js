'use strict';

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_LASTNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

var wizards = [];

for (var i = 0; i < 4; i++) {
  wizards.push({
    name: WIZARD_NAMES[Math.floor(Math.random() * WIZARD_NAMES.length)],
    lastname: WIZARD_LASTNAMES[Math.floor(Math.random() * WIZARD_LASTNAMES.length)],
    coatColor: COAT_COLORS[Math.floor(Math.random() * COAT_COLORS.length)],
    eyesColor: EYES_COLORS[Math.floor(Math.random() * EYES_COLORS.length)]
  });

  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizards[i].name + ' ' + wizards[i].lastname;
  wizardElement.querySelector('.wizard-coat').style.fill = wizards[i].coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizards[i].eyesColor;

  similarListElement.appendChild(wizardElement);
}

userDialog.querySelector('.setup-similar').classList.remove('hidden');
