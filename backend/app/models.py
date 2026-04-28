from sqlalchemy import Column, Integer, String, ForeignKey, DateTime, Text
from app.db import Base
from datetime import datetime

class Artist(Base):
    __tablename__ = "artists"
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, index=True, nullable=False, unique=True)
    lastfm_id = Column(String, index=True)
    image_url = Column(String, index=False)
    created_at = Column(DateTime, default=datetime.now)
    updated_at = Column(DateTime, default=datetime.now)

class Album(Base):
    __tablename__ = "albums"
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, index=True, nullable=False, unique=True)
    artist_id = Column(Integer, ForeignKey("artists.id"), nullable=False)
    lastfm_id = Column(String, index=True)
    image_url = Column(String, index=False)
    created_at = Column(DateTime, default=datetime.now)
    updated_at = Column(DateTime, default=datetime.now)

class Song(Base):
    __tablename__ = "songs"
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, index=True, nullable=False, unique=True)
    artist_id = Column(Integer, ForeignKey("artists.id"), nullable=False)
    album_id = Column(Integer, ForeignKey("albums.id"), nullable=True)
    lastfm_id = Column(String, index=True)
    image_url = Column(String, index=False)
    created_at = Column(DateTime, default=datetime.now)
    updated_at = Column(DateTime, default=datetime.now)


class Note(Base):
    __tablename__ = "notes"
    id = Column(Integer, primary_key=True, index=True)
    song_id = Column(Integer, ForeignKey("songs.id"), nullable=False)
    content = Column(Text, nullable=False)
    created_at = Column(DateTime, default=datetime.now)