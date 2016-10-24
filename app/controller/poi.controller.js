/**
 * Created by salho on 24.10.16.
 */
import POI from "../models/poi.model"

export const create = (req,res,next) => {
  try {
    let poi = new POI(req.body);
    poi.creator = req.user.id;
    poi.save()
      .then(poi => POI.load(poi._id))
      .then(poi => {req.poi = poi; next()})
      .catch(err => res.status(400).json({message:err.message}))
  } catch(err) {
    res.status(500).json({message:"Could not create POI"})
  }
};

export const show = (req,res) => {
  try {
    res.json(req.poi);
  } catch(err) {
    res.status(500).json({message:"Could not show POI"})
  }
};
