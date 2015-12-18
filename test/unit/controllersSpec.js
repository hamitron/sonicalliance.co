'use strict';

/* jasmine specs for controllers go here */
describe('showfax controllers', function() {
 
 beforeEach(function(){
    this.addMatchers({
      toEqualData: function(expected) {
        return angular.equals(this.actual, expected);
      }
    });
  });

  beforeEach(module('showfax'));
  beforeEach(module('showfaxServices'));


  describe('projectListCtrl', function(){
    var fakeResponse = {"locations": ["Los Angeles",
                                      "New York",
                                      "Chicago",
                                      "Southeast",
                                      "Vancouver",
                                      "Toronto",
                                      "Texas",
                                      "Northwest"
                        ],
                        "project_types": ["Episodics",
                                          "Pilots",
                                          "Features",
                                          "Movie of the week/Miniseries/Cable Feature/Special",
                                          "Commercials/Infomercials/Voiceovers",
                                          "Music Videos",
                                          "Short Films/Industrials/Educationals",
                                          "Interactive/Home Videos/Video Games",
                                          "Plays",
                                          "Internet Productions"
                        ],
                        "projects": [
                        {
                                "label": "MAMMA MIA",
                                "id": 68332,
                                "directors": "TARA RUBIN",
                                "project_location": " Los Angeles, New York, Chicago",
                                "project_type": "Plays",
                                "start_date": "01/14/2014",
                                "search_field": "MAMMA MIA TARA RUBIN"
                        },
                        {
                                "label": "A GENTLEMAN'S GUIDE TO LOVE AND MURDER (BROADWAY)",
                                "id": 120468,
                                "directors": "BINDER CASTING",
                                "project_location": " New York",
                                "project_type": "Plays",
                                "start_date": "02/11/2014",
                                "search_field": "A GENTLEMAN'S GUIDE TO LOVE AND MURDER (BROADWAY) BINDER CASTING"
                        },
                        {
                                "label": "BOYSTOWN",
                                "id": 121985,
                                "directors": "RICKY REIDLING",
                                "project_location": " Los Angeles",
                                "project_type": "Episodics",
                                "start_date": "05/26/2015",
                                "search_field": "BOYSTOWN RICKY REIDLING"
                          }]};

    var $httpBackend, scope, ctrl

    beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
      $httpBackend = _$httpBackend_;
       $httpBackend.expectGET('http://10.253.202.100:3000/api/v1/projects').
          respond(fakeResponse);
      scope = $rootScope.$new();
      ctrl = $controller('projectListCtrl', {$scope: scope});
    }));


    it('populate list from API resource', function() {
      expect(scope.projects).toEqualData([]);
      $httpBackend.flush();

      expect(scope.projects).toEqualData(
          fakeResponse.projects);
      expect(scope.locations).toEqualData(
          fakeResponse.locations);
      expect(scope.project_types).toEqualData(
          fakeResponse.project_types);
    });


    it('should not show detail', function() {
      expect(scope.showDetail).toBe(false);
    });

    it('pagination starts at 0', function() {
      expect(scope.beginVar).toBe(0);
    });


    it('should have a page limit of 20', function() {
      expect(scope.perPage).toBe(20);
    });

  });


  describe('projectShowCtrl', function(){
    var fakeProject = {"project": {
                                    "label": "THRILLER LIVE",
                                    "id": 115640,
                                    "directors": "DUNCAN STEWART AND COMPANY",
                                    "project_location": " New York",
                                    "project_type": {
                                    "id": 9,
                                    "label": "Plays",
                                    "description": ""
                                  },
                      "start_date": "03/20/2013",
                      "roles": [{
                                "id": 731755,
                                "label": "Man #1",
                                "revised": false
                                } ],
                      "attachments": []
                                  }
                      };
    var $httpBackend, scope, ctrl

    beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('http://10.253.202.100:3000/api/v1/projects/115640.json').
          respond(fakeProject);
      scope = $rootScope.$new();
      ctrl = $controller('projectShowCtrl', {$scope: scope});
    }));

    it('should fetch project detail', function() {
      scope.setId(115640);
      $httpBackend.flush();
     expect(scope.projectShow).toEqualData(fakeProject.project)
     expect(scope.projectShow.roles).toEqualData(fakeProject.project.roles)
     expect(scope.showDetail).toBe(true);
    });
  });
});
