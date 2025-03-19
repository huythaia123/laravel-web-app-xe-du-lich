<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class AutocompleteController extends Controller
{
    public function search(Request $request)
    {
        $input = $request->input("input");

        if (!$input) {
            return response()->json(["error", "Missing input parameter"], 400);
        }

        $apiKey = config("services.goong.api_key");
        $url = "https://rsapi.goong.io/place/autocomplete?input={$input}&api_key={$apiKey}";

        $response = Http::get($url);

        return response()->json($response->json());
    }
}
