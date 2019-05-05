<?php

namespace App\Domain\StorableObject\ApiObject;

use App\Domain\StorableObject\IStorable;
use App\Util\DataLoader\ApiProviders;
use App\Util\DataLoader\OutputType;

final class Artist extends ApiObject implements IStorable
{
    use AggregatesTracks;

    protected $type = OutputType::ARTIST;

    protected $id;

    private $name;

    protected $source;

    function fromSoundCloud(Object $artist): void
    {
        $this->id = (string)$artist->id;
        $this->name = $artist->username;
        $this->source = ApiProviders::SOUNDCLOUD;
    }

    function fromJamendo(Object $artist): void
    {
        $this->id = $artist->id;
        $this->name = $artist->name;
        $this->source = ApiProviders::JAMENDO;
    }

    function toArray(): array
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'source' => $this->source,
            'tracks' => $this->mapTracksToArray($this->tracks),
        ];
    }

    static function fromArray(array $array): ApiObject
    {
        $object = new self();
        return $object->hashMapToObject($array);
    }

    public function serialize(): array
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'source' => $this->source,
            'tracks' => $this->mapTracksToKeys($this->tracks),
            'trackFilled' => $this->trackFilled,
        ];
    }

    public function hashMapToObject(array $array): Artist
    {
        $this->id = $array['id'];
        $this->name = $array['name'];
        $this->source = $array['source'];
        $this->trackFilled = $array['trackFilled'];

        return $this;
    }
}

