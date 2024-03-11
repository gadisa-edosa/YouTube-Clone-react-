export const API_KEY = 'AIzaSyDbMRYPLqZyj_2CLe-UjEC0RoWQwhxzW4k';

export const value_converter = (value)=>{
  if(value>=1000000)
  {
    return Math.floor(value/1000000)+"M";
  }
  else if(value>=1000)
  {
    return Math.floor(value/1000)+"K";
  }
  else{
    return value;
  }
}