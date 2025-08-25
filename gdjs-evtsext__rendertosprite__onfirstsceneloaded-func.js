
if (typeof gdjs.evtsExt__RenderToSprite__onFirstSceneLoaded !== "undefined") {
  gdjs.evtsExt__RenderToSprite__onFirstSceneLoaded.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__RenderToSprite__onFirstSceneLoaded = {};


gdjs.evtsExt__RenderToSprite__onFirstSceneLoaded.userFunc0x95c3e8 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
gdjs._renderToSprite = {};
gdjs._renderToSprite.rt = PIXI.RenderTexture.create({ width: 100, height: 100 });
gdjs._renderToSprite.sprite = PIXI.Sprite.from(gdjs._renderToSprite.rt);

};
gdjs.evtsExt__RenderToSprite__onFirstSceneLoaded.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__RenderToSprite__onFirstSceneLoaded.userFunc0x95c3e8(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__RenderToSprite__onFirstSceneLoaded.func = function(runtimeScene, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
},
  _objectArraysMap: {
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("RenderToSprite"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("RenderToSprite"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__RenderToSprite__onFirstSceneLoaded.eventsList0(runtimeScene, eventsFunctionContext);


return;
}

gdjs.evtsExt__RenderToSprite__onFirstSceneLoaded.registeredGdjsCallbacks = [];
gdjs.evtsExt__RenderToSprite__onFirstSceneLoaded.registeredGdjsCallbacks.push((runtimeScene) => {
    gdjs.evtsExt__RenderToSprite__onFirstSceneLoaded.func(runtimeScene, runtimeScene);
})
gdjs.registerFirstRuntimeSceneLoadedCallback(gdjs.evtsExt__RenderToSprite__onFirstSceneLoaded.registeredGdjsCallbacks[gdjs.evtsExt__RenderToSprite__onFirstSceneLoaded.registeredGdjsCallbacks.length - 1]);
