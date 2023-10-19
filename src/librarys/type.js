export const CATEGORY = [
  { key: "ARM", value: "팔" },
  { key: "SHOULDER", value: "어깨" },
  { key: "KNEE", value: "무릎" },
  { key: "THIGH", value: "허벅지" },
];

export const POSITION = [
  { key: "STANDING", value: "선" },
  { key: "SITTING", value: "앉은" },
  { key: "LYING", value: "누운" },
];

function getDisplayName(list, key) {
  const item = list.find(({ key: k }) => k === key);
  return item ? item.value : null;
}

export function getCategoryDisplayName(key) {
  return getDisplayName(CATEGORY, key);
}

export function getPositionDisplayName(key) {
  const value = getDisplayName(POSITION, key);
  return value ? value + " 자세" : value;
}
