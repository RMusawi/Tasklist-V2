<?php

namespace App\Http\Controllers;

use App\Models\Activity;
use Illuminate\Http\Request;

class ActivitiesController extends Controller
{
    public function store(Request $request)
    {
        $activity_name = $request->input('activity_name');
        $checked = $request->boolean('checked');

        $data = array(
            'activity_name' => $activity_name,
            'checked' => $checked,
        );

        $activity = Activity::create($data);

        return response()->json([
            'data' => [
                'type' => 'activities',
                'message' => 'Success',
                'id' => $activity->id,
                'attributes' => $activity
            ]
        ],);
    }

    public function index(): \Illuminate\Http\JsonResponse
    {
        $activities = Activity::get();

        return response()->json([
            'data' => $activities
        ]);
    }

    public function update(Request $request, Activity $activity): \Illuminate\Http\JsonResponse
    {
        $checked = $request->boolean('checked');
        $activity->activity_name = $request->input('activity_name');
        $activity->save();


        return response()->json([
            'data' => [
                'type' => 'activities',
                'message' => 'Update Success',
                'id' => $activity->id,
                'attributes' => $activity,
                'checked' => $checked
            ]
        ]);
    }

    public function check(Request $request, Activity $activity): \Illuminate\Http\JsonResponse
    {
        $activity->update([
            'checked' => $request->get('checked', false)
        ]);

        return response()->json([
            $activity->toArray()
        ]);
    }

    public function show(Activity $activity): \Illuminate\Http\JsonResponse
    {
        return response()->json([
            'data' => [
                'type' => 'activities',
                'message' => 'Success',
                'attributes' => $activity
            ]
        ]);
    }

    public function destroy(Activity $activity): \Illuminate\Http\JsonResponse
    {

        $activity->delete();
        return response()->json([], 204);
    }
}
