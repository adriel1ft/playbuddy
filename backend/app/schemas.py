from pydantic import BaseModel
from datetime import datetime

class ArtistIn(BaseModel):
    name: str

class ArtistOut(BaseModel):
    id: int
    name: str
    lastfm_id: str | None = None
    image_url: str | None = None
    created_at: datetime

    class Config:
        from_attributes = True


class AlbumIn(BaseModel):
    name:str
    artist_id: int

class AlbumOut(BaseModel):
    id: int
    name: str
    artist_id: int
    lastfm_id: str | None = None
    image_url: str | None = None
    created_at: datetime

    class Config:
        from_attributes = True
        
class SongIn(BaseModel):
    name:str
    artist_id: int
    album_id: int | None = None

class SongOut(BaseModel):
    id: int
    name: str
    artist_id: int
    album_id: int
    lastfm_id: str | None = None
    image_url: str | None = None