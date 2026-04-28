from fastapi import FastAPI
from sqlalchemy.orm import Session
from fastapi import Depends
from app.db import get_db
from app import models, schemas

app = FastAPI()


@app.post("/api/artists", response_model=schemas.ArtistOut)
def create_artist(artist: schemas.ArtistIn, db: Session = Depends(get_db)):
    db_artist = models.Artist(name=artist.name)
    db.add(db_artist)
    db.commit()
    db.refresh(db_artist)
    return db_artist

@app.post("/api/albums", response_model=schemas.AlbumOut)
def create_album(album: schemas.AlbumIn, db: Session = Depends(get_db)):
    db_album = models.Album(name=album.name, artist_id=album.artist_id)
    db.add(db_album)
    db.commit()
    db.refresh(db_album)
    return db_album

@app.post("/api/songs", response_model=schemas.SongOut)
def create_song(song: schemas.SongIn, db: Session = Depends(get_db)):
    db_song = models.Song(name=song.name, artist_id=song.artist_id, album_id=song.album_id)
    db.add(db_song)
    db.commit()
    db.refresh(db_song)
    return db_song

@app.get("/api/health")
def health():
    return {"status": "ok"}